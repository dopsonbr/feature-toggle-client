FROM ubuntu:16.04 AS build-env


# minimum
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        apt-utils build-essential \
    && rm -rf /var/lib/apt/lists/*

# java
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl git openjdk-8-jdk-headless \
    && rm -rf /var/lib/apt/lists/*

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    build-essential \
    ca-certificates \
    gcc \
    libpq-dev \
    make \
    python-pip \
    python2.7

# node
RUN curl -sL http://deb.nodesource.com/setup_8.x | bash - \
    && apt-get update && apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g yarn

# Chrome requirements
RUN apt-get update -qqy \
  && apt-get -qqy install \
       gnupg \
       apt-transport-https \
       ttf-wqy-zenhei \
       wget \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# Install chrome
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update \
  && apt-get install google-chrome-stable -y \
  && rm /etc/apt/sources.list.d/google-chrome.list \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

WORKDIR /work
COPY . .
RUN yarn && ./node_modules/@angular/cli/bin/ng build
CMD ./node_modules/@angular/cli/bin/ng serve
