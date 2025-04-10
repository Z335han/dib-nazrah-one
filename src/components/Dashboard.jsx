import { Activity, AlertTriangle, CheckCircle, ChevronDown, Clock, Database, Eye, Globe, HelpCircle, MessageSquare, Mic, Search, Server, Settings, Smartphone, Wifi, Zap } from 'lucide-react';

import React, { useState, useEffect } from 'react';
import { 
  systemStatus,
  transactionCounts, 
  billPaymentCounts, 
  scheduledActivities, 
  previousTickets 
} from '../data/mockData';

// Mock data for demonstration


// Mock data for demonstration
/*
const systemStatus = {
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

const transactionCounts = [
  { type: "Within Own Accounts", count: 2453, trend: "up" },
  { type: "Within DIB Accounts", count: 1872, trend: "up" },
  { type: "Other UAE Banks", count: 964, trend: "down" },
  { type: "International Transfers", count: 342, trend: "up" },
  { type: "Express Transfers", count: 189, trend: "down" }
];

const billPaymentCounts = [
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

const scheduledActivities = [
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

const previousTickets = [
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

*/

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMaintenances, setActiveMaintenances] = useState([]);
  const [isSouronActive, setIsSouronActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("All Systems");
  const [userInput, setUserInput] = useState("");
  const [souronMessages, setSouronMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Check for active maintenances
      const active = scheduledActivities.filter(activity => {
        const start = new Date(activity.startTime);
        const end = new Date(activity.endTime);
        return now >= start && now <= end;
      });
      
      setActiveMaintenances(active);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'operational':
        return 'bg-emerald-500';
      case 'issue':
        return 'bg-amber-500';
      case 'maintenance':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const toggleSouron = () => {
    const newState = !isSouronActive;
    setIsSouronActive(newState);
    
    if (newState) {
      // Clear previous messages when reopening
      setSouronMessages([{
        text: "You cannot hide from me mortal. What command shall I execute?",
        isUser: false
      }]);
      
      // Use speech synthesis to speak the welcome message
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("You cannot hide from me mortal. What command shall I execute?");
        utterance.rate = 0.9; // Slightly slower rate for dramatic effect
        utterance.pitch = 0.8; // Lower pitch for ominous tone
        
        // Find a deeper voice if available
        const voices = window.speechSynthesis.getVoices();
        const deepVoice = voices.find(voice => voice.name.includes('Male') || voice.name.includes('Deep'));
        if (deepVoice) {
          utterance.voice = deepVoice;
        }
        
        window.speechSynthesis.speak(utterance);
      }
    } else {
      // Stop any ongoing speech when closing
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      // Stop listening if active
      setIsListening(false);
    }
  };
  
  const handleSouronSubmit = () => {
    if (!userInput.trim()) return;
    
    // Add user message
    setSouronMessages(prev => [...prev, {
      text: userInput,
      isUser: true
    }]);
    
    // Simulate processing
    setTimeout(() => {
      // Add Souron response
      const responses = [
        "I see all. Your request is being processed.",
        "Your command has been acknowledged, mortal.",
        "The eye of Souron is searching for your answer.",
        "Your query is being analyzed. Stand by.",
        "I have seen this before. Retrieving information."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setSouronMessages(prev => [...prev, {
        text: randomResponse,
        isUser: false
      }]);
      
      // Speak the response
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(randomResponse);
        utterance.rate = 0.9;
        utterance.pitch = 0.8;
        window.speechSynthesis.speak(utterance);
      }
    }, 1000);
    
    // Clear input
    setUserInput("");
  };
  
  const toggleListening = () => {
    if (!isListening) {
      setIsListening(true);
      
      // Check if speech recognition is available
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onstart = () => {
          console.log('Voice recognition started');
        };
        
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setUserInput(transcript);
          setIsListening(false);
          
          // Auto-submit after voice input
          setTimeout(() => {
            setSouronMessages(prev => [...prev, {
              text: transcript,
              isUser: true
            }]);
            
            // Simulate response
            setTimeout(() => {
              const responses = [
                "I see all. Your request is being processed.",
                "Your command has been acknowledged, mortal.",
                "The eye of Souron is searching for your answer.",
                "Your query is being analyzed. Stand by.",
                "I have seen this before. Retrieving information."
              ];
              const randomResponse = responses[Math.floor(Math.random() * responses.length)];
              
              setSouronMessages(prev => [...prev, {
                text: randomResponse,
                isUser: false
              }]);
              
              // Speak the response
              if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(randomResponse);
                utterance.rate = 0.9;
                utterance.pitch = 0.8;
                window.speechSynthesis.speak(utterance);
              }
            }, 1000);
            
            setUserInput("");
          }, 500);
        };
        
        recognition.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };
        
        recognition.onend = () => {
          setIsListening(false);
        };
        
        recognition.start();
      } else {
        alert('Speech recognition is not supported in this browser');
        setIsListening(false);
      }
    } else {
      setIsListening(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg border-b border-emerald-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative mr-2">
              <img 
                src="/DIB NazrahOne Logo.png" 
                alt="DIB NazrahOne Logo" 
                className="h-12 w-12"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-400 tracking-wider">NazrahOne</h1>
              <p className="text-xs text-gray-400 italic">one view. instant sight</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-400">{currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
              <p className="text-lg font-bold text-emerald-400">{formatTime(currentTime)}</p>
            </div>
            
            <div className="fixed bottom-8 right-8 z-10">
              <button 
                onClick={toggleSouron}
                className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-black border-2 border-amber-700 shadow-lg hover:border-amber-500 transition-all duration-300"
              >
                <div className={`absolute w-8 h-8 rounded-full bg-red-600 shadow-lg ${isSouronActive ? 'animate-ping opacity-70' : ''}`}></div>
                <div className="absolute w-8 h-8 rounded-full bg-red-700 shadow-lg group-hover:animate-pulse"></div>
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black border border-amber-700 px-3 py-1 rounded text-amber-500 text-xs">
                  Activate Souron
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Souron Dialog */}
      {isSouronActive && (
        <div className="fixed bottom-8 right-8 z-50 w-96">
          <div className="bg-black border-2 border-amber-700 rounded-lg shadow-2xl p-6 animate-fadeIn overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-amber-900/20 opacity-50 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Zap className="text-amber-500 mr-2" size={22} />
                  <h2 className="text-amber-500 text-xl font-bold tracking-wider">SOURON</h2>
                </div>
                <button onClick={toggleSouron} className="text-amber-600 hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-red-600/20 animate-ping"></div>
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-amber-700 flex items-center justify-center relative z-10">
                    <div className={`w-10 h-10 rounded-full bg-red-600 ${isListening ? 'animate-pulse' : 'animate-pulse'} shadow-lg`}></div>
                    <div className="absolute inset-0 border-2 border-amber-500 rounded-full opacity-0 animate-ping"></div>
                  </div>
                </div>
              </div>
              
              <div className="h-60 overflow-y-auto mb-4 space-y-3 pr-1 scrollbar-thin scrollbar-thumb-amber-900 scrollbar-track-gray-900">
                {souronMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-3/4 p-3 rounded-lg ${message.isUser 
                      ? 'bg-amber-800/30 text-amber-200 rounded-br-none' 
                      : 'bg-gray-800/70 text-amber-400 rounded-bl-none border-l-2 border-red-600'}`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 mb-3">
                <button 
                  onClick={toggleListening}
                  className={`p-2 rounded-full ${isListening 
                    ? 'bg-red-600 text-white animate-pulse' 
                    : 'bg-amber-900/50 text-amber-500 hover:bg-amber-800/50'} transition-colors`}
                >
                  <Mic size={20} />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSouronSubmit()}
                    placeholder="Enter your command..."
                    className="w-full bg-gray-900/50 rounded-lg border border-amber-900/50 p-3 text-amber-400 placeholder-amber-900/50 focus:outline-none focus:border-amber-700"
                  />
                </div>
                <button 
                  onClick={handleSouronSubmit}
                  className="p-2 rounded-full bg-amber-700 text-amber-100 hover:bg-amber-600 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Active Maintenance Alert */}
      {activeMaintenances.length > 0 && (
        <div className="bg-amber-700 text-black py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <AlertTriangle className="mr-2" size={20} />
              <div>
                <span className="font-bold">MAINTENANCE IN PROGRESS: </span>
                {activeMaintenances.map((maintenance, index) => (
                  <span key={index}>
                    {maintenance.title} ({formatTime(new Date(maintenance.startTime))} - {formatTime(new Date(maintenance.endTime))})
                    {index < activeMaintenances.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          
          {/* Previous Tickets Search */}
          <div className="col-span-12 lg:col-span-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-emerald-400 flex items-center">
                <HelpCircle size={18} className="mr-2 text-amber-500" />
                Previous Tickets
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search previous tickets..."
                  className="px-4 py-2 pr-10 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-200 placeholder-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            <div className="overflow-y-auto max-h-80">
              <table className="min-w-full bg-gray-800">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Issue</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Resolution</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {previousTickets.filter(ticket => 
                    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    ticket.id.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map((ticket, index) => (
                    <tr key={index} className="hover:bg-gray-700 transition-colors duration-150">
                      <td className="px-4 py-3 text-sm font-medium text-amber-400">{ticket.id}</td>
                      <td className="px-4 py-3">
                        <div className="text-sm font-medium text-gray-200">{ticket.title}</div>
                        <div className="text-xs text-gray-400">{ticket.description}</div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-300">{ticket.resolution}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{formatDate(ticket.date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* System Status Section */}
          <div className="col-span-12 lg:col-span-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
            <h2 className="text-lg font-bold text-emerald-400 mb-4 flex items-center">
              <Server size={18} className="mr-2 text-amber-500" />
              System Status
            </h2>
            
            <div className="mb-4">
              <h3 className="text-md font-semibold text-gray-300 mb-2 flex items-center">
                <Database size={16} className="mr-2 text-emerald-400" />
                Banking Systems
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {systemStatus.banking.map((system, index) => (
                  <div key={index} className="border border-gray-700 bg-gray-700 rounded-md p-2 flex flex-col items-center hover:bg-gray-600 transition-colors duration-200">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(system.status)} mb-1`}></div>
                    <span className="text-xs font-medium text-center text-gray-200">{system.name}</span>
                    <span className="text-xs text-gray-400">{system.uptime}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-md font-semibold text-gray-300 mb-2 flex items-center">
                <Wifi size={16} className="mr-2 text-emerald-400" />
                Service Providers
              </h3>
              <div className="grid grid-cols-6 gap-2">
                {systemStatus.serviceProviders.map((system, index) => (
                  <div key={index} className="border border-gray-700 bg-gray-700 rounded-md p-2 flex flex-col items-center hover:bg-gray-600 transition-colors duration-200">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(system.status)} mb-1`}></div>
                    <span className="text-xs font-medium text-center text-gray-200">{system.name}</span>
                    <span className="text-xs text-gray-400">{system.uptime}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-md font-semibold text-gray-300 mb-2 flex items-center">
                <Globe size={16} className="mr-2 text-emerald-400" />
                Global Systems
              </h3>
              <div className="grid grid-cols-6 gap-2">
                {systemStatus.global.map((system, index) => (
                  <div key={index} className="border border-gray-700 bg-gray-700 rounded-md p-2 flex flex-col items-center hover:bg-gray-600 transition-colors duration-200">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(system.status)} mb-1`}></div>
                    <span className="text-xs font-medium text-center text-gray-200">{system.name}</span>
                    <span className="text-xs text-gray-400">{system.uptime}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Transaction Counts */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
            <h2 className="text-lg font-bold text-emerald-400 mb-4 flex items-center">
              <Activity size={18} className="mr-2 text-amber-500" />
              Transaction Counts
            </h2>
            <div className="space-y-3">
              {transactionCounts.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-700 pb-2">
                  <span className="text-sm text-gray-300">{transaction.type}</span>
                  <div className="flex items-center">
                    <span className="text-sm font-bold text-amber-400">{transaction.count.toLocaleString()}</span>
                    <span className={`ml-1 ${transaction.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                      {transaction.trend === 'up' ? '▲' : '▼'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bill Payment Counts */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
            <h2 className="text-lg font-bold text-emerald-400 mb-4 flex items-center">
              <Smartphone size={18} className="mr-2 text-amber-500" />
              Bill Payment Counts
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {billPaymentCounts.map((bill, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-700 pb-1">
                  <span className="text-xs text-gray-300">{bill.type}</span>
                  <div className="flex items-center">
                    <span className="text-xs font-bold text-amber-400">{bill.count}</span>
                    <span className={`ml-1 ${bill.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                      {bill.trend === 'up' ? '▲' : '▼'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scheduled Activities */}
          <div className="col-span-12 lg:col-span-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
            <h2 className="text-lg font-bold text-emerald-400 mb-4 flex items-center">
              <Clock size={18} className="mr-2 text-amber-500" />
              Scheduled Activities
            </h2>
            <div className="space-y-3">
              {scheduledActivities.map((activity, index) => {
                const startDate = new Date(activity.startTime);
                const endDate = new Date(activity.endTime);
                const now = new Date();
                const isActive = now >= startDate && now <= endDate;
                
                return (
                  <div 
                    key={index} 
                    className={`border rounded-md p-3 ${isActive ? 'border-amber-600 bg-amber-900/20' : 'border-gray-700 bg-gray-700/50'}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-sm font-bold ${isActive ? 'text-amber-500' : 'text-gray-200'}`}>
                        {activity.title}
                      </h3>
                      {isActive && (
                        <span className="bg-amber-900/50 text-amber-400 text-xs font-semibold px-2 py-0.5 rounded-full border border-amber-700/50">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mb-1">{activity.description}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">System: <span className="font-medium text-emerald-400">{activity.system}</span></span>
                      <span className="text-gray-400">
                        {formatDate(activity.startTime)} - {formatDate(activity.endTime)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Transaction Search */}
          <div className="col-span-12 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
            <h2 className="text-lg font-bold text-emerald-400 mb-4 flex items-center">
              <Search size={18} className="mr-2 text-amber-500" />
              Transaction Search
            </h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="w-full md:w-64">
                <label className="block text-sm font-medium text-gray-300 mb-1">Select System</label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-gray-200 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md appearance-none"
                    value={selectedSystem}
                    onChange={(e) => setSelectedSystem(e.target.value)}
                  >
                    <option>All Systems</option>
                    <option>Mobile Banking</option>
                    <option>Internet Banking</option>
                    <option>NPSS</option>
                    <option>CRM</option>
                    <option>T24</option>
                    <option>SOA</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-64">
                <label className="block text-sm font-medium text-gray-300 mb-1">Reference ID</label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-700 focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-600 text-gray-200 rounded-md"
                  placeholder="Enter reference number"
                />
              </div>
              
              <div className="w-full md:w-64">
                <label className="block text-sm font-medium text-gray-300 mb-1">Customer ID</label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-700 focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-600 text-gray-200 rounded-md"
                  placeholder="Enter customer ID"
                />
              </div>
              
              <div className="w-full md:w-64">
                <label className="block text-sm font-medium text-gray-300 mb-1">Date Range</label>
                <input
                  type="date"
                  className="shadow-sm bg-gray-700 focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-600 text-gray-200 rounded-md"
                />
              </div>
              
              <div className="w-full md:w-auto flex items-end">
                <button className="bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-amber-100 font-medium py-2 px-4 rounded-md transition-colors shadow-lg">
                  Search
                </button>
              </div>
            </div>
            
            <div className="border border-gray-700 rounded-md p-4 bg-gray-700/30 flex items-center justify-center h-40">
              <p className="text-gray-400 text-sm">Enter search criteria and click Search to display transaction details</p>
            </div>
          </div>
          
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-gray-300 py-4 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Dubai Islamic Bank. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Settings size={18} className="text-amber-600 hover:text-amber-400 cursor-pointer transition-colors" />
              <HelpCircle size={18} className="text-amber-600 hover:text-amber-400 cursor-pointer transition-colors" />
              <MessageSquare size={18} className="text-amber-600 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;