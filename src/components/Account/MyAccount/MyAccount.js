import ProfileInfo from './ProfileInfo/ProfileInfo';
import Badges from './Badges/Badges';
import MiniEvents from './MiniEvents/MiniEvents';
import Opportunities from './Opportunities/Opportunities';
import './MyAccount.css';

function MyAccount({ userEmail }) {
  return (
    <div className="my-account-grid">
      <ProfileInfo userEmail={userEmail} />
      <MiniEvents />
      <Badges userEmail={userEmail}/>
      <Opportunities />
    </div>
  );
}

export default MyAccount;