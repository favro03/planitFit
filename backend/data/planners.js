import User from '../models/userModel.js';
import users from './users.js';

const planners = [
  {
    user: {
        name: 'John Doe',
      },
    exerciseGoal: ['Gym 30 minutes', '2-mile dog walk'],
    amSelfCare: ['Shower', 'Wash Face'],
    amTasks: ['Put dishes away', 'Work from 8-4'],
    food: {
      breakfast: ['Drink', 'Banana'],
      lunch: ['Sandwich', 'Chips'],
      snack: ['Protein bar'],
      dinner: ['Spaghetti', 'Garlic bread'],
    },
    pmActivities: ['Pick up kids at 4', 'Softball practice', 'Drinks with the girls', 'Computer time'],
    dailyChore: ['Clean Bathroom'],
    pmSelfCare: ['Wash face'],
    reflection: 'The day was good. We went to the pool and had fun.',
  },
  {
    user: {
        name: 'Tracy Favro',
      },
    exerciseGoal: ['Yoga 1 hour'],
    amSelfCare: ['Meditation'],
    amTasks: ['Grocery shopping', 'Laundry'],
    food: {
      breakfast: ['Smoothie', 'Toast'],
      lunch: ['Salad', 'Fruit'],
      snack: ['Yogurt'],
      dinner: ['Grilled chicken', 'Steamed vegetables'],
    },
    pmActivities: ['Movie night', 'Read a book'],
    dailyChore: ['Vacuum the house'],
    pmSelfCare: ['Take a bath'],
    reflection: 'Had a relaxing day. Enjoyed the evening with a good movie.',
  },
  {
    user: {
        name: 'Tracy Favro',
      },
    exerciseGoal: ['Running 5 miles'],
    amSelfCare: ['Stretching'],
    amTasks: ['Prepare presentation'],
    food: {
      breakfast: ['Eggs', 'Toast'],
      lunch: ['Wrap', 'Veggies'],
      snack: ['Fruit'],
      dinner: ['Fish', 'Quinoa'],
    },
    pmActivities: ['Attend a meeting', 'Go to the gym'],
    dailyChore: ['Organize desk'],
    pmSelfCare: ['Meditation'],
    reflection: 'Had a productive day. Achieved my running goal and completed my presentation.',
  },
];

export default planners;
