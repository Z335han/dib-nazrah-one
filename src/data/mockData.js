// Mock data for demonstration
export const systemStatus = {
  banking: [
    { name: "Internet Banking", status: "operational", uptime: "99.8%" },
    { name: "Mobile Banking", status: "operational", uptime: "99.9%" },
    { name: "SOA", status: "operational", uptime: "99.7%" },
    { name: "CRM", status: "operational", uptime: "100%" },
    { name: "T24", status: "issue", uptime: "97.3%" },
    { name: "EZMCOM", status: "operational", uptime: "99.5%" },
    { name: "SMS", status: "operational", uptime: "99.9%" },
    { name: "i-Statement", status: "maintenance", uptime: "94.2%" }
  ],
  serviceProviders: [
    { name: "NPSS (aani)", status: "operational", uptime: "99.8%" },
    { name: "DEWA", status: "operational", uptime: "100%" },
    { name: "FEWA", status: "operational", uptime: "99.9%" },
    { name: "SALIK", status: "issue", uptime: "98.2%" },
    { name: "DU", status: "operational", uptime: "99.7%" },
    { name: "ETISALAT", status: "operational", uptime: "99.9%" }
  ],
  global: [
    { name: "Android Play Store", status: "operational", uptime: "100%" },
    { name: "iOS App Store", status: "operational", uptime: "99.9%" },
    { name: "APNS", status: "operational", uptime: "99.8%" },
    { name: "GCM", status: "operational", uptime: "99.9%" },
    { name: "WhatsApp", status: "issue", uptime: "97.5%" },
    { name: "Microsoft Services", status: "operational", uptime: "99.7%" }
  ]
};

export const transactionCounts = [
  { type: "Within Own Accounts", count: 2453, trend: "up" },
  { type: "Within DIB Accounts", count: 1872, trend: "up" },
  { type: "Other UAE Banks", count: 964, trend: "down" },
  { type: "International Transfers", count: 342, trend: "up" },
  { type: "Express Transfers", count: 189, trend: "down" }
];

export const billPaymentCounts = [
  { type: "Etisalat", count: 876, trend: "up" },
  { type: "Du", count: 654, trend: "up" },
  { type: "Salik", count: 432, trend: "down" },
  { type: "DEWA", count: 1245, trend: "up" },
  { type: "FEWA", count: 398, trend: "up" },
  { type: "SEWA", count: 267, trend: "down" },
  { type: "Abu Dhabi Distribution", count: 189, trend: "down" },
  { type: "Ajman Sewerage", count: 87, trend: "up" },
  { type: "EMICOOL", count: 134, trend: "down" },
  { type: "Air Arabia", count: 76, trend: "up" },
  { type: "DED", count: 123, trend: "down" },
  { type: "EMAAR", count: 92, trend: "up" }
];

export const scheduledActivities = [
  { 
    title: "SOA Linux OS Patching", 
    system: "SOA", 
    startTime: "2025-04-13T04:00:00", 
    endTime: "2025-04-13T07:00:00", 
    status: "scheduled",
    description: "Regular system maintenance and security updates for SOA Linux servers"
  },
  { 
    title: "MB Deployment", 
    system: "Mobile Banking", 
    startTime: "2025-04-14T01:00:00", 
    endTime: "2025-04-14T03:00:00", 
    status: "scheduled",
    description: "New version deployment for Mobile Banking application"
  },
  { 
    title: "IB Windows OS Patching", 
    system: "Internet Banking", 
    startTime: "2025-04-15T02:00:00", 
    endTime: "2025-04-15T05:00:00", 
    status: "scheduled",
    description: "Windows security updates for IB servers"
  },
  { 
    title: "Database Performance Tuning", 
    system: "T24", 
    startTime: "2025-04-18T00:00:00", 
    endTime: "2025-04-18T03:00:00", 
    status: "scheduled",
    description: "Optimization of database indexes and query performance"
  }
];

export const previousTickets = [
  { 
    id: "TKT-2025-04-0178", 
    title: "Mobile Banking Login Issue", 
    description: "Customers unable to login to Mobile Banking using fingerprint", 
    status: "Resolved",
    resolution: "Restarted the authentication service and cleared the cache",
    date: "2025-04-08T14:32:00"
  },
  { 
    id: "TKT-2025-04-0165", 
    title: "International Transfer Delays", 
    description: "Delays in processing international transfers to EU countries", 
    status: "Resolved",
    resolution: "Fixed connectivity issue with the SWIFT network gateway",
    date: "2025-04-07T10:15:00"
  },
  { 
    id: "TKT-2025-04-0152", 
    title: "Bill Payment Failure for DEWA", 
    description: "Customers reporting failures when trying to pay DEWA bills", 
    status: "Resolved",
    resolution: "Updated the DEWA integration API to use the new endpoints",
    date: "2025-04-06T16:45:00"
  },
  { 
    id: "TKT-2025-04-0134", 
    title: "Statement Download Issue", 
    description: "PDF statement downloads failing in Internet Banking", 
    status: "Resolved",
    resolution: "Fixed the PDF generation service and increased memory allocation",
    date: "2025-04-05T09:23:00"
  }
];