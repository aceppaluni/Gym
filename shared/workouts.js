export const WORKOUTS = [
    mondayUpperBody = [
        {
            mainTitle: 'Monday Eccentric Workout',  // {UPPERBODYWORKOUTS.mondayUpperBody.mainTitle} 
            category: 'Upper Body'
        },
        {   id: 0,
            name: 'Barbell Bench Press Variation', // {UPPERBODYWORKOUTS.mondayUpperBody.name} 
            set: '3-4 sets @ 3-5 reps w/ final set AMRAP', // {UPPERBODYWORKOUTS.mondayUpperBody.set} 
        }, {
            id: 1,
            name: 'Dip',
            set: '3-4 sets x 8-20 reps',
        }, {
            id: 2, 
            name: 'Horizontal Pull Variation',
            set: '3-4 sets x 8-12 reps',
        }, {
            id: 3,
            name: 'ISO Hold Y-W-T',
            set: '3-4 sets x 10-20 sec hold',
        }, {
            id: 4,
            name: 'Dubbell Lateral Raise',
            set: '3-4 sets x 8-12 reps',
        }, {
            id: 5, 
            name: 'Bicep Curl',
            set: '3-4 sets x 8-12 reps',
        }
    ],
    tuesdayLowerBody =[
        {
            mainTitle: 'Tuesday Eccentric Low Body',
            category: 'Lower Body'
        },
        {
            id: 0,
            name: 'Partial Range Deadlift',
            set: '3-4 sets x 8-10 reps',
            
        },
        {
            id: 1,
            name: 'Romanian Deadlift',
            set: '3-4 sets x 8-10 reps',
        }
    ],
    wednesdayFullBody = [
        {
            mainTitle: 'FullBody Wednesday',
            category: 'Full Body'
        },
        {
            id: 0,
            name: 'KB Swings',
            set: '3-4 sets x 10-12 reps',
        },
        {
            id: 1, 
            name: 'KB reverse lunge',
            set: '3-4 sets x 8-10 reps',
        }
    ],
    thursdayUpperBody = [
        {
            mainTitle: 'Thursday Mass Volume Workout',
            category: 'Upper Body'
        },
        {
            id: 0,
            name: 'Partial Range Barbell Bench Press',
            set: '3-4 sets x 8-10 reps',
        }
    ],
    fridayLowerBody = [
        {
            mainTitle: 'Friday Low Body Mass',
            category: 'Lower Body'
        },
        {
            id: 0,
            name: 'Bulgarian Split Squat',
            set: '3-4 sets x 8-10 reps',
        }
    ]
];

console.log(WORKOUTS[1][0].category)