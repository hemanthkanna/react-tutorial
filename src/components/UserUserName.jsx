export function UserUserName(props) {
  return (
    <>
      <b>UserName: </b>
      <span>{props.username}</span>
      <br />
      <b>Acc Type : </b>
      <span>{props.acc_type}</span>
    </>
  );
}
