import { getModelNameFromUrl, urlHasQueryParams } from '../urlParsing';

describe('urlParsing', () => {
  describe('getModelNameFromUrl', () => {
    it('handles top level urls', () => {
      expect(getModelNameFromUrl('events')).toBe('events');
      expect(getModelNameFromUrl('users')).toBe('users');
      expect(getModelNameFromUrl('users')).toBe('users');
      expect(getModelNameFromUrl('events/1')).toBe('events');
    });

    it('handles relationship urls', () => {
      expect(getModelNameFromUrl('users/1/events')).toBe('events');
      expect(getModelNameFromUrl('users/1/events/1')).toBe('events');
    });

    it('properly aliases models', () => {
      expect(getModelNameFromUrl('events/1/volunteers')).toBe('users');
      expect(getModelNameFromUrl('events/1/volunteers')).toBe('users');
      expect(getModelNameFromUrl('events/1/owner')).toBe('users');

      expect(getModelNameFromUrl('users/1/eventsAttending')).toBe('events');
      expect(getModelNameFromUrl('users/1/eventsAttending')).toBe('events');
    });
  });

  describe('urlHasQueryParams', () => {
    it('is true for urls with query params', () => {
      expect(urlHasQueryParams('events/1?filter={"include":"volunteers"}')).toBe(true);
    });

    it('is false for urls without query params', () => {
      expect(urlHasQueryParams('events/1')).toBe(false);
    });
  });

  it('properly handles rel urls', () => {
    expect(getModelNameFromUrl('users/1/eventsAttending/rel/1')).toBe('eventVolunteers');
    expect(getModelNameFromUrl('events/1/volunteers/rel/1')).toBe('eventVolunteers');
  });
});
