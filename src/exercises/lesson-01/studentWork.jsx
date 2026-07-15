//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Jocelyn Bartolo';
  const age = 27;
  const hobbies = [
    'Reading',
    'Music',
    'Swimming and Exercising',
    'Cooking',
    'Painting',
  ];

  return (
    <div>
      <h1>About Me</h1>

      <p>
        {' '}
        My name is {name} and I am {age} years old.{' '}
      </p>
      <p>
        {' '}
        I am learning how to program using React. Although it is a long and
        challenging journey, I am enjoying the process and I hope to continue
        learning and improving my skills.{' '}
      </p>

      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
