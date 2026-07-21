function SnackList() {
  const snacks = [
    {
      name: 'Gummy Bears',
      rank: 5,
    },
    {
      name: 'Chocolate',
      rank: 4,
    },
    {
      name: 'Trail Mix',
      rank: 3,
    },
    {
      name: 'Donuts',
      rank: 2,
    },
    {
      name: 'Chips',
      rank: 1,
    },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>

    // <ul>
    //     {sortedSnacks.map((snack) => (
    //         <li key={snack.rank}>
    //             #{snack.rank} {snack.name}
    //         </li>
    //     ))}
    // </ul>
  );
}

export default SnackList;
