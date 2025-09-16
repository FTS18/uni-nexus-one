// Centralized course data
export const courses = {
  "OR2302": { "courseName": "Introduction to Discipline Engineering" },
  "CH2301": { "courseName": "Applied Chemistry-I" },
  "CH2302": { "courseName": "Applied Chemistry-II" },
  "ES2304": { "courseName": "Introduction to Mechatronics" },
  "MA2301": { "courseName": "Calculus" },
  "ES2302": { "courseName": "Engineering Drawing with CAD Software" },
  "ES2307": { "courseName": "Introduction to Product Design" },
  "GS2302": { "courseName": "Universal Human Values" },
  "ES2303": { "courseName": "Skill Development Workshop" },
  "GS2301": { "courseName": "Introduction to Environmental Sciences" },
  "PY2301": { "courseName": "Electromagnetic Theory and Quantum Physics" },
  "ES2301": { "courseName": "Introduction to Computer Programming" },
  "HS2351": { "courseName": "Communication Skills" },
  "ES2305": { "courseName": "Introduction to Electronics & Electrical Engineering" },
  "ES2306": { "courseName": "Strength of Materials" },
  "PY2302": { "courseName": "Mechanics and Optics" },
  "Intro to Disc.": { "courseName": "Introduction to Discipline Engineering" }
};

// Branch-wise timetables from the provided correct JSON
export const allTimetables = [
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Computer Science Engineering",
    "branchCode": "CSE",
    "notes": [
      "Groups G1 means first 60 SID+backlog students & G2 means rest SID students.",
      "Groups F1, F2, F3 means first 40 SID+backlog, second 40 SID and rest SID respectively for 120 students branch.",
      "For the venue of practical and tutorials classes, students should consult with the course instructor."
    ],
    "schedule": {
      "Monday": [
        { "startTime": "08:00", "endTime": "10:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G1", "location": null },
            { "courseCode": "PY2301", "classType": "Lab", "group": "F3", "location": null }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": "G1, G2", "location": "L-28, L-29" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L1", "location": "L-28, L-29" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lab", "group": "F2 (F21, F22)", "location": null },
            { "courseCode": "ES2301", "classType": "Lab", "group": "F3", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L1", "location": "L-28, L-29" }
        ]},
        { "startTime": "16:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L1", "location": "L-30, L-31" }
        ]}
      ],
      "Tuesday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L2", "location": "L-28, L-29" }
        ]},
        { "startTime": "10:00", "endTime": "12:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lab", "group": "F2", "location": null },
            { "courseCode": "HS2351", "classType": "Lab", "group": "F1 (F11, F12)", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lab", "group": "F1", "location": null },
            { "courseCode": "ES2301", "classType": "Lab", "group": "F2", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L1", "location": "L-28, L-29" }
        ]}
      ],
      "Wednesday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L1", "location": "L-28, L-29" }
        ]},
        { "startTime": "10:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G2", "location": null },
            { "courseCode": "PY2301", "classType": "Lab", "group": "F1", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L2", "location": "L-28, L-29" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "GS2301", "classType": "Lecture", "group": "G1, G2", "location": "L-28, L-29" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L2", "location": "L-28, L-29" }
        ]}
      ],
      "Thursday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L2", "location": "L-30, L-31" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L3", "location": "L-30, L-31" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lab", "group": "F3", "location": null },
            { "courseCode": "ES2301", "classType": "Lab", "group": "F1", "location": null }
        ]},
        { "startTime": "16:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L3", "location": "L-30, L-31" }
        ]}
      ],
      "Friday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L3", "location": "L-28, L-29" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "L-28, L-29" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L2", "location": "L-11, L-15" }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lab", "group": "F3 (F31, F32)", "location": null },
            { "courseCode": "ES2305", "classType": "Lab", "group": "F2", "location": null }
        ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Artificial Intelligence",
    "branchCode": "AI",
    "notes": [
      "Groups T1 and T2 means first 30 SID+backlog and rest SID respectively for 60 students branch.",
      "For the venue of practical and tutorials classes, students should consult with the course instructor."
    ],
    "schedule": {
      "Monday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": "G2", "location": "L-29" }
        ]},
        { "startTime": "10:00", "endTime": "12:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lab", "group": "T1", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L1", "location": "L-15" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lecture", "group": "L1", "location": "L-15" }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lab", "group": "T1", "location": null }
        ]}
      ],
      "Tuesday": [
        { "startTime": "08:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2307", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lecture", "group": "L1", "location": "L-10" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L2", "location": "L-10" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L1", "location": "L-10" }
        ]}
      ],
      "Wednesday": [
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "GS2302", "classType": "Lecture", "group": "L1", "location": "L-15" }
        ]},
        { "startTime": "13:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lab", "group": "G1", "location": null }
        ]}
      ],
      "Thursday": [
        { "startTime": "08:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2303", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L2", "location": "L-15" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lecture", "group": "L2", "location": "L-15" }
        ]}
      ],
      "Friday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L3", "location": "L-11" }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lecture", "group": "L2", "location": "L-11" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lecture", "group": "L3", "location": "L-11" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G1" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "L-10" }
        ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Data Science",
    "branchCode": "DS",
    "notes": [
      "Groups T1 and T2 means first 30 SID+backlog and rest SID respectively for 60 students branch.",
      "For the venue of practical and tutorials classes, students should consult with the course instructor."
    ],
    "schedule": {
      "Monday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": null, "location": "L-30" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L1", "location": "L-10" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L1", "location": "L-29" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L1", "location": "L-29" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "GS2301", "classType": "Lecture", "group": null, "location": "L-11" }
        ]}
      ],
      "Tuesday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L2", "location": "L-31" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L1", "location": "L-31" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lab", "group": "T1", "location": null },
            { "courseCode": "ES2305", "classType": "Lab", "group": "T2", "location": null }
        ]}
      ],
      "Wednesday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L1", "location": "L-10" }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L2", "location": "L-10" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L3", "location": "L-10" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lab", "group": "T1", "location": null },
            { "courseCode": "HS2351", "classType": "Lab", "group": "T2", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L2", "location": "L-15" }
        ]}
      ],
      "Thursday": [
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L2", "location": "L-15" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L2", "location": "L-27" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L3", "location": "L-27" }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lab", "group": "T2", "location": null },
            { "courseCode": "HS2351", "classType": "Lab", "group": "T1", "location": null }
        ]}
      ],
      "Friday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L3", "location": "L-10" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "L-10" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lab", "group": "T1", "location": null },
            { "courseCode": "ES2301", "classType": "Lab", "group": "T2", "location": null }
        ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Mathematics and Computing",
    "branchCode": "M&C",
    "notes": [
      "Groups G1 means first 60 SID+backlog students & G2 means rest SID students.",
      "For the venue of practical and tutorials classes, students should consult with the course instructor."
    ],
    "schedule": {
      "Monday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lecture", "group": "L1", "location": "L-10" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]},
        { "startTime": "14:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2303", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "16:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]}
      ],
      "Tuesday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lecture", "group": "L1", "location": "L-11" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lab", "group": "T2", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lab", "group": "T2", "location": null }
        ]}
      ],
      "Wednesday": [
        { "startTime": "08:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L2", "location": "L-10" }
        ]}
      ],
      "Thursday": [
        { "startTime": "08:00", "endTime": "10:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "T-3" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lecture", "group": "L2", "location": "L-30" }
        ]}
      ],
      "Friday": [
        { "startTime": "08:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2307", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "GS2302", "classType": "Lecture", "group": "L1", "location": "L-26" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lecture", "group": "L3", "location": "L-11" }
        ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Electronics and Communication Engineering",
    "branchCode": "ECE",
    "notes": [
      "Groups G1 means first 60 SID+backlog students & G2 means rest SID students except for Production& Ind Engg.",
      "For the venue of practical and tutorials classes, students should consult with the course instructor."
    ],
    "schedule": {
      "Monday": [
        { "startTime": "08:00", "endTime": "09:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]},
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2307", "classType": "Lab", "group": "G1", "location": null },
            { "courseCode": "ES2302", "classType": "Lab", "group": "G2", "location": null }
        ]}
      ],
      "Tuesday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "GS2302", "classType": "Lecture", "group": "G1, G2", "location": "L-26, L-27" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L2", "location": "L-26, L-27" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2303", "classType": "Lab", "group": "G2", "location": null },
            { "courseCode": "ES2302", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "CH2302", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]}
      ],
      "Wednesday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": "G1", "location": "L-27" }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lecture", "group": "L2", "location": "L-28, L-29" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L2", "location": "L-26, L-27" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G1", "location": null },
            { "courseCode": "CH2301", "classType": "Lab", "group": "F3", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lab", "group": "F1", "location": null },
            { "courseCode": "ES2304", "classType": "Lab", "group": "F2", "location": null }
        ]}
      ],
      "Thursday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lecture", "group": "L2", "location": "L-26, L-27" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "L-26, L-27" }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lab", "group": "G2", "location": null },
            { "courseCode": "ES2307", "classType": "Lab", "group": "G1", "location": null }
        ]}
      ],
      "Friday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": "G2", "location": "L-31" }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lecture", "group": "L3", "location": "L-26, L-27" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L3", "location": "L-26, L-27" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "CH2301", "classType": "Lab", "group": "F2", "location": null },
            { "courseCode": "ES2304", "classType": "Lab", "group": "F3", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G2", "location": null },
            { "courseCode": "ES2304", "classType": "Lab", "group": "F1", "location": null }
        ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "VLSI Design and Technology",
    "branchCode": "VLSI",
    "notes": [
      "Groups G1/G2 and T1/T2 are based on student IDs.",
      "Consult instructor for lab venues."
    ],
    "schedule": {
      "Monday": [
          { "startTime": "09:00", "endTime": "10:00", "courses": [
              { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": "G2", "location": "L-29" }
          ]},
          { "startTime": "10:00", "endTime": "12:00", "courses": [
              { "courseCode": "ES2304", "classType": "Lab", "group": "T2", "location": null }
          ]},
          { "startTime": "13:00", "endTime": "14:00", "courses": [
              { "courseCode": "ES2304", "classType": "Lecture", "group": "L1", "location": "L-15" }
          ]},
          { "startTime": "14:00", "endTime": "15:00", "courses": [
              { "courseCode": "CH2301", "classType": "Lecture", "group": "L1", "location": "L-15" }
          ]},
          { "startTime": "15:00", "endTime": "17:00", "courses": [
              { "courseCode": "CH2301", "classType": "Lab", "group": "T2", "location": null }
          ]}
      ],
      "Tuesday": [
          { "startTime": "08:00", "endTime": "12:00", "courses": [
              { "courseCode": "ES2307", "classType": "Lab", "group": "G1" }
          ]},
          { "startTime": "13:00", "endTime": "14:00", "courses": [
              { "courseCode": "ES2302", "classType": "Lecture", "group": "L1", "location": "L-10" }
          ]},
          { "startTime": "14:00", "endTime": "15:00", "courses": [
              { "courseCode": "ES2304", "classType": "Lecture", "group": "L2", "location": "L-10" }
          ]},
          { "startTime": "15:00", "endTime": "16:00", "courses": [
              { "courseCode": "MA2301", "classType": "Lecture", "group": "L1", "location": "L-10" }
          ]}
      ],
      "Wednesday": [
          { "startTime": "11:00", "endTime": "12:00", "courses": [
              { "courseCode": "GS2302", "classType": "Lecture", "group": "L1", "location": "L-15" }
          ]},
          { "startTime": "13:00", "endTime": "17:00", "courses": [
              { "courseCode": "ES2302", "classType": "Lab", "group": "G1" }
          ]}
      ],
      "Thursday": [
          { "startTime": "08:00", "endTime": "12:00", "courses": [
              { "courseCode": "ES2303", "classType": "Lab", "group": "G1" }
          ]},
          { "startTime": "13:00", "endTime": "14:00", "courses": [
              { "courseCode": "MA2301", "classType": "Lecture", "group": "L2", "location": "L-15" }
          ]},
          { "startTime": "14:00", "endTime": "15:00", "courses": [
              { "courseCode": "CH2301", "classType": "Lecture", "group": "L2", "location": "L-15" }
          ]}
      ],
      "Friday": [
          { "startTime": "09:00", "endTime": "10:00", "courses": [
              { "courseCode": "ES2304", "classType": "Lecture", "group": "L3", "location": "L-11" }
          ]},
          { "startTime": "10:00", "endTime": "11:00", "courses": [
              { "courseCode": "ES2302", "classType": "Lecture", "group": "L2", "location": "L-11" }
          ]},
          { "startTime": "11:00", "endTime": "12:00", "courses": [
              { "courseCode": "CH2301", "classType": "Lecture", "group": "L3", "location": "L-11" }
          ]},
          { "startTime": "13:00", "endTime": "15:00", "courses": [
              { "courseCode": "MA2301", "classType": "Lab", "group": "G1" }
          ]},
          { "startTime": "15:00", "endTime": "16:00", "courses": [
              { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "L-10" }
          ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Electrical Engineering",
    "branchCode": "EE",
    "notes": [
      "Groups G1 means first 60 SID+backlog students & G2 means rest SID students.",
      "Groups F1, F2, F3 means first 40 SID+backlog, second 40 SID and rest SID respectively for 120 students branch.",
      "For the venue of practical and tutorials classes, students should consult with the course instructor."
    ],
    "schedule": {
      "Monday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L1", "location": "L-30, L-31" }
        ]},
        { "startTime": "10:00", "endTime": "12:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lab", "group": "F2 (F21, F22)", "location": null },
            { "courseCode": "ES2301", "classType": "Lab", "group": "F3", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G1", "location": null },
            { "courseCode": "PY2301", "classType": "Lab", "group": "F3", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L1", "location": "L-30, L-31" }
        ]}
      ],
      "Tuesday": [
        { "startTime": "08:00", "endTime": "10:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lab", "group": "F1 (F11, F12)", "location": null }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L1", "location": "L-28, L-29" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L1", "location": "L-28, L-29" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L2", "location": "L-29, L-30" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L1", "location": "L-29, L-30" }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lab", "group": "F2", "location": null }
        ]}
      ],
      "Wednesday": [
        { "startTime": "08:00", "endTime": "10:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lab", "group": "F3 (F31, F32)", "location": null },
            { "courseCode": "ES2305", "classType": "Lab", "group": "F2", "location": null }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L2", "location": "L-26, L-27" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L2", "location": "L-28, L-29" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L2", "location": "L-30, L-31" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L2", "location": "L-30, L-31" }
        ]}
      ],
      "Thursday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L3", "location": "L-28, L-29" }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "GS2301", "classType": "Lecture", "group": "G1, G2", "location": "L-30, L-31" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G2", "location": null },
            { "courseCode": "PY2301", "classType": "Lab", "group": "F1", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lab", "group": "F3", "location": null },
            { "courseCode": "ES2301", "classType": "Lab", "group": "F1", "location": null }
        ]}
      ],
      "Friday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": "G1, G2", "location": "L-26, L-27" }
        ]},
        { "startTime": "10:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lab", "group": "F1", "location": null },
            { "courseCode": "ES2301", "classType": "Lab", "group": "F2", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "L-30, L-31" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L3", "location": "L-30, L-31" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L3", "location": "L-30, L-31" }
        ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Mechanical Engineering",
    "branchCode": "MECH",
    "notes": [
      "Groups G1/G2 and F1/F2/F3 are based on student IDs for labs/tutorials.",
      "Consult the course instructor for the venue of practical and tutorial classes."
    ],
    "schedule": {
      "Monday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]},
        { "startTime": "13:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2307", "classType": "Lab", "group": "G1", "location": null },
            { "courseCode": "ES2302", "classType": "Lab", "group": "G2", "location": null }
        ]}
      ],
      "Tuesday": [
        { "startTime": "08:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2303", "classType": "Lab", "group": "G2", "location": null },
            { "courseCode": "ES2302", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "CH2302", "classType": "Lecture", "group": "L1", "location": "L-26, L-27" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L2", "location": "L-26, L-27" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L2", "location": "L-26, L-27" }
        ]}
      ],
      "Wednesday": [
        { "startTime": "08:00", "endTime": "10:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G2", "location": null },
            { "courseCode": "ES2304", "classType": "Lab", "group": "F1", "location": null }
        ]},
        { "startTime": "10:00", "endTime": "12:00", "courses": [
            { "courseCode": "CH2302", "classType": "Lab", "group": "F1", "location": null },
            { "courseCode": "ES2304", "classType": "Lab", "group": "F2", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "CH2302", "classType": "Lecture", "group": "L2", "location": "L-26, L-27" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2302", "classType": "Lecture", "group": "L2", "location": "L-26, L-27" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": "G1, G2", "location": "L-26, L-27" }
        ]}
      ],
      "Thursday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "L-28, L-29" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "CH2302", "classType": "Lecture", "group": "L3", "location": "L-28, L-29" }
        ]},
        { "startTime": "14:00", "endTime": "16:00", "courses": [
            { "courseCode": "CH2302", "classType": "Lab", "group": "F2", "location": null },
            { "courseCode": "ES2304", "classType": "Lab", "group": "F3", "location": null }
        ]},
        { "startTime": "16:00", "endTime": "17:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L2", "location": "L-28, L-29" }
        ]}
      ],
      "Friday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2304", "classType": "Lecture", "group": "L3", "location": "L-30, L-31" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "GS2302", "classType": "Lecture", "group": "G1, G2", "location": "L-30, L-31" }
        ]},
        { "startTime": "14:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2303", "classType": "Lab", "group": "G1", "location": null },
            { "courseCode": "ES2307", "classType": "Lab", "group": "G2", "location": null }
        ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Civil Engineering",
    "branchCode": "CIVIL",
    "notes": ["Groups G1/G2, F1/F2/F3 are based on student IDs.", "Consult instructor for lab venues."],
    "schedule": {
      "Monday": [
        { "startTime": "09:00", "endTime": "11:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lab", "group": "F3" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "G1, G2", "location": "L-30, L-31" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lab", "group": "F2" },
            { "courseCode": "ES2301", "classType": "Lab", "group": "F3" }
        ]}
      ],
      "Tuesday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "G1, G2", "location": "L-28, L-29" }
        ]},
        { "startTime": "10:00", "endTime": "12:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lab", "group": "F2" },
            { "courseCode": "HS2351", "classType": "Lab", "group": "F1" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "G1, G2", "location": "L-28, L-29" }
        ]}
      ],
      "Wednesday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "G1, G2", "location": "L-30, L-31" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L2", "location": "G1, G2" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L2", "location": "G1, G2" }
        ]}
      ],
      "Thursday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L2", "location": "G1, G2" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2306", "classType": "Lab", "group": "F3" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lab", "group": "F1" }
        ]}
      ],
      "Friday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L3", "location": "G1, G2" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "G1, G2" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L2", "location": "L-11, L-15" }
        ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Production and Industrial Engineering",
    "branchCode": "PROD",
    "notes": ["Group G1 is based on student IDs.", "Consult instructor for lab venues."],
    "schedule": {
      "Monday": [
        { "startTime": "08:00", "endTime": "09:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L1", "location": "L-15" }
        ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L1", "location": "L-15" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "ES2306", "classType": "Lecture", "group": "L1", "location": "L-28" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L1", "location": "L-28" }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "ES2306", "classType": "Lab", "group": "G1", "location": null }
        ]}
      ],
      "Tuesday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": null, "location": "L-30" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2306", "classType": "Lecture", "group": "L2", "location": "L-30" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "PY2302", "classType": "Lecture", "group": "L1", "location": "L-28" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L2", "location": "L-28" }
        ]},
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lab", "group": "G1", "location": null }
        ]}
      ],
      "Wednesday": [
        { "startTime": "08:00", "endTime": "10:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L3", "location": "L-26" }
        ]},
        { "startTime": "10:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L2", "location": "L-10" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L2", "location": "L-10" }
        ]}
      ],
      "Thursday": [
        { "startTime": "09:00", "endTime": "11:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lab", "group": "G1 (G11, G12)", "location": null }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "ES2306", "classType": "Lecture", "group": "L3", "location": "L-10" }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "MA2301", "classType": "Lecture", "group": "L3", "location": "L-10" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "PY2302", "classType": "Lecture", "group": "L2", "location": "L-10" }
        ]}
      ],
      "Friday": [
        { "startTime": "10:00", "endTime": "12:00", "courses": [
            { "courseCode": "PY2302", "classType": "Lab", "group": "G1", "location": null }
        ]},
        { "startTime": "14:00", "endTime": "15:00", "courses": [
            { "courseCode": "GS2301", "classType": "Lecture", "group": null, "location": "L-27" }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "PY2302", "classType": "Lecture", "group": "L3", "location": "L-27" }
        ]}
      ]
    }
  },
  {
    "session": "2025-2026",
    "semester": 1,
    "branch": "Bachelor of Design",
    "branchCode": "B_DES",
    "notes": ["Consult instructor for lab/tutorial venues."],
    "schedule": {
      "Monday": [
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "Intro to Disc.", "classType": "Lecture", "group": null, "location": "T-7" }
        ]}
      ],
      "Tuesday": [
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L1", "location": "L-31" }
        ]},
        { "startTime": "13:00", "endTime": "14:00", "courses": [
            { "courseCode": "GS2301", "classType": "Lecture", "group": null, "location": "T-7" }
        ]}
      ],
      "Wednesday": [
         { "startTime": "09:00", "endTime": "10:00", "courses": [
             { "courseCode": "MA2301", "classType": "Lecture", "group": "L1", "location": "L-10" }
         ]},
        { "startTime": "10:00", "endTime": "11:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lecture", "group": "L2", "location": "L-10" }
        ]},
        { "startTime": "11:00", "endTime": "12:00", "courses": [
            { "courseCode": "ES2305", "classType": "Lecture", "group": "L3", "location": "L-10" }
        ]},
        { "startTime": "13:00", "endTime": "15:00", "courses": [
            { "courseCode": "PY2301", "classType": "Lab", "group": "T1", "location": null },
            { "courseCode": "HS2351", "classType": "Lab", "group": "T2", "location": null }
        ]},
        { "startTime": "15:00", "endTime": "16:00", "courses": [
            { "courseCode": "ES2301", "classType": "Lecture", "group": "L2", "location": "L-15" }
        ]}
      ],
      "Thursday": [
        { "startTime": "15:00", "endTime": "17:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lab", "group": "T1", "location": null }
        ]}
      ],
      "Friday": [
        { "startTime": "09:00", "endTime": "10:00", "courses": [
            { "courseCode": "HS2351", "classType": "Lecture", "group": "L2", "location": "L-30" }
        ]}
      ]
    }
  }
]

