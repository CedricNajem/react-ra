import users from "./users.json";

[
  {
    id: "47125423",
    name: "Marilou Goldner PhD",
    phone: "(657) 984-4352",
    email: "Alysha88@yahoo.com",
  },
  {
    id: "9064632",
    name: "Candelario Heaney",
    phone: "(657) 865-7552",
    email: "Candelario88@gmail.com",
  },
  {
    id: "47122353",
    name: "Abel Quitzon",
    phone: "(657) 984-4352",
    email: "Abel88@yahoo.com",
  },
  {
    id: "76422423",
    name: "Elliott Wolf",
    phone: "(657) 984-4352",
    email: "Eliott88@yahoo.com",
  },
];

function Page2() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
