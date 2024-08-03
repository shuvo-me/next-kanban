const data  = [
    {
      title: 'To Do',
      id: 'todo',
      tasks: [
        {
          title: 'Make the work done',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolor?',
          tags: ['web', 'design'],
          dueDate: '12-25-12'
        }
      ]
    },
    {
      title: 'In Progress',
      id: 'in-progress',
      tasks: [
        {
          title: 'Complete project setup',
          description: 'Initialize the project repository and set up the development environment.',
          tags: ['development', 'setup'],
          dueDate: '08-10-24'
        }
      ]
    },
    {
      title: 'Review',
      id: 'review',
      tasks: [
        {
          title: 'Design the homepage',
          description: 'Create wireframes and design mockups for the homepage.',
          tags: ['design', 'homepage'],
          dueDate: '08-15-24'
        }
      ]
    },
    {
      title: 'Done',
      id: 'done',
      tasks: [
        {
          title: 'Set up CI/CD pipeline',
          description: 'Configure continuous integration and continuous deployment for the project.',
          tags: ['devops', 'ci/cd'],
          dueDate: '08-25-24'
        }
      ]
    }
  ]

  export default data;