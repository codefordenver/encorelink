# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/trusty64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  config.hostmanager.enabled = true
  config.hostmanager.manage_host = true
  config.vm.hostname = "encorelink.dev"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "forwarded_port", guest: 3001, host: 3001
  config.vm.network "forwarded_port", guest: 3449, host: 3449
  config.vm.network "forwarded_port", guest: 5432, host: 5432 #postgres
  config.vm.network "forwarded_port", guest: 5433, host: 5433 #postgres
  config.vm.network "forwarded_port", guest: 8080, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/vagrant", type: "rsync", rsync__auto: true, rsync__exclude: [".git/", "node_modules/"]

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
    vb.memory = "2048"
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL

  config.vm.provision "shell", inline: <<-SHELL
    date1=$(date +"%s")
    echo " "
    echo "**********************"
    echo " "
    echo "Starting Provisioning"
    echo " "
    echo "**********************"
    echo " "

    # Update Packages
    echo " "
    echo Updating packages...
    echo " "
    sudo apt-get -y update

    # Install Dependencies
    echo " "
    echo Installing dependencies...
    echo " "
    sudo apt-get install -y unzip
    sudo apt-get install -y curl
    sudo apt-get install -y wget
    sudo apt-get install -y git

    # install node and npm (implicitly)
    echo " "
    echo Installing Node.js...
    echo " "
    # sudo curl --silent --location https://rpm.nodesource.com/setup_4.x | sudo bash -
    # sudo yum -y install nodejs
    sudo curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    sudo apt-get install -y nodejs

    # install postgres
    echo " "
    echo Installing PostgreSQL...
    echo " "
    sudo apt-get install -y postgresql postgresql-contrib
    # sudo update-rc.d postgresql enable
    sudo service postgresql restart
    sudo -u postgres createuser -D -w vagrant
    sudo -u postgres createdb -O vagrant encorelink
    sudo cp /vagrant/pg_hba.conf /etc/postgresql/9.*/main/pg_hba.conf
    sudo service postgresql restart

    # install encorelink dependencies
    echo " "
    echo Installing encorelink dependencies...
    echo " "
    cd /vagrant
    npm install

    # loopback db config
    echo " "
    echo Creating loopback db config...
    echo " "
    cp /vagrant/server/datasources.local.example.json /vagrant/server/datasources.local.json

    # calculate provisioning time
    date2=$(date +"%s")
    diff=$(($date2-$date1))
    echo " "
    echo "****************************"
    echo " "
    echo "Provisioning completed in:"
    echo "$(($diff / 60)) minutes and $(($diff % 60)) seconds."
    echo " "
    echo "****************************"
    echo " "
  SHELL

  end
