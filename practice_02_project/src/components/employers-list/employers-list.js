import EmployersListItem from "../employers-list-item/employers-list-item";

import "./employers-list.css";

const EmployersList = () => {
  return (
    <ul className="app-list list-group">
      <EmployersListItem name="John C." salary={800} />
      <EmployersListItem name="Alex M." salary={3000} />
      <EmployersListItem name="Carl W." salary={5000} />
    </ul>
  );
};

export default EmployersList;
