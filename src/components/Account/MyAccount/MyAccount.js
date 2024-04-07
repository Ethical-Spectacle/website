import ProfileInfo from './ProfileInfo/ProfileInfo';
// import Badges from './Badges/Badges';
// import MiniEvents from './MiniEvents/MiniEvents';
// import Opportunities from './Opportunities/Opportunities';
import './MyAccount.css';

function MyAccount() {
  return (
    <div className="my-account-grid">
      <ProfileInfo />
      {/* <Badges />
      <MiniEvents />
      <Opportunities /> */}
    </div>
  );
}

export default MyAccount;