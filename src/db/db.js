import React from "react";
import ActionButton from "../components/ActionButton";

const headers = [
  {
    key: "name",
    header: "Name"
  },
  {
    key: "type",
    header: "Type"
  },
  {
    key: "location",
    header: "Location"
  },
  {
    key: "publicIp",
    header: "Public IP"
  },
  {
    key: "privateIp",
    header: "Private IP"
  },
  {
    key: "startDate",
    header: "Start Date"
  },
  {
    key: "action",
    header: ""
  }
];

const rows = [
  {
    id: "1",
    name: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: "158.268.124.13",
    privateIp: "10.22.20.70",
    startDate: "2018-09-15",
    action: <ActionButton />
  },
  {
    id: "2",
    name: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: "169.57.188.29",
    privateIp: "10.150.33.118",
    startDate: "2019-03-02",
    action: <ActionButton />
  },
  {
    id: "3",
    name: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: "168.12.46.94",
    privateIp: "101.80.52.20",
    startDate: "2017-12-05",
    action: <ActionButton />
  },
  {
    id: "4",
    name: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: "198.168.203.23",
    privateIp: "10.05.22.70",
    startDate: "2019-10-31",
    action: <ActionButton />
  },
  {
    id: "5",
    name: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: "184.193.10.67",
    privateIp: "10.41.23.70",
    startDate: "2017-05-24",
    action: <ActionButton />
  },
  {
    id: "6",
    name: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: "158.177.134.13",
    privateIp: "10.45.23.22",
    startDate: "2018-09-15",
    action: <ActionButton />
  },
  {
    id: "7",
    name: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: "169.47.198.29",
    privateIp: "10.152.108",
    startDate: "2019-03-02",
    action: <ActionButton />
  },
  {
    id: "8",
    name: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: "168.1.444.9",
    privateIp: "10.8.51.20",
    startDate: "2017-12-05",
    action: <ActionButton />
  },
  {
    id: "9",
    name: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: "108.162.299.23",
    privateIp: "101.45.2.90",
    startDate: "2019-10-31",
    action: <ActionButton />
  },
  {
    id: "10",
    name: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: "182.172.21.67",
    privateIp: "10.33.5.70",
    startDate: "2017-05-24",
    action: <ActionButton />
  },
  {
    id: "11",
    name: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: "158.177.124.3",
    privateIp: "101.145.90.70",
    startDate: "2018-09-15",
    action: <ActionButton />
  },
  {
    id: "12",
    name: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: "168.157.96.29",
    privateIp: "101.150.44.118",
    startDate: "2019-03-02",
    action: <ActionButton />
  },
  {
    id: "13",
    name: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: "168.11.461.9",
    privateIp: "10.80.521.20",
    startDate: "2017-12-05",
    action: <ActionButton />
  },
  {
    id: "14",
    name: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: "108.16.231.10",
    privateIp: "101.42.251.7",
    startDate: "2019-10-31",
    action: <ActionButton />
  },
  {
    id: "15",
    name: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: "100.102.21.67",
    privateIp: "101.4.1.0",
    startDate: "2017-05-24",
    action: <ActionButton />
  },
  {
    id: "16",
    name: "SLADC232270-msf",
    type: "Virtual Server",
    location: "London",
    publicIp: "188.115.1.13",
    privateIp: "101.5.2.7",
    startDate: "2018-09-15",
    action: <ActionButton />
  },
  {
    id: "17",
    name: "softlayer.emerald.com",
    type: "Virtual Server",
    location: "Sydney",
    publicIp: "158.7.196.2",
    privateIp: "101.15.22.118",
    startDate: "2019-03-02",
    action: <ActionButton />
  },
  {
    id: "18",
    name: "control.integrationdemo",
    type: "Virtual Server",
    location: "Dallas",
    publicIp: "168.111.4.109",
    privateIp: "101.22.2.20",
    startDate: "2017-12-05",
    action: <ActionButton />
  },
  {
    id: "19",
    name: "prod.checkout.com",
    type: "Virtual Server",
    location: "cell text",
    publicIp: "101.18.23.231",
    privateIp: "101.76.2.22",
    startDate: "2019-10-31",
    action: <ActionButton />
  },
  {
    id: "20",
    name: "baremetal.emerald.com",
    type: "bare Metal",
    location: "Sydney",
    publicIp: "12.3.202.67",
    privateIp: "101.45.202.70",
    startDate: "2017-05-24",
    action: <ActionButton />
  }
];

const db = {
  headers,
  rows
};

export default db;
