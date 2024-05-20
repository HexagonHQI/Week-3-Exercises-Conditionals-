const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
const numberOfUsers = users.length;

if (numberOfUsers === 0) {
  console.log("No one is online.");
} else if (numberOfUsers === 1) {
  console.log(`${users[0]} is online.`);
} else if (numberOfUsers === 2) {
  console.log(`${users[0]} and ${users[1]} are online.`);
} else {
  console.log(`${users[0]}, ${users[1]} and ${numberOfUsers - 2} more are online.`);
}
