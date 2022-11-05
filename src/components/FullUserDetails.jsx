import { Link, useParams } from "react-router-dom";

export default function FullUserDetails({ userData }) {
  const { email } = useParams();

  return (
    <>
      {userData &&
        userData
          .filter((user) => user.email === email)
          .map((card, index) => (
            <main key={index} className="card full-card">
              <Link to="/users" className="go-back-btn">
                <i className="ri-arrow-left-s-line"></i> Go back
              </Link>
              <div className="">
                <img
                  src={card.picture.large}
                  alt={`${card.name.first} ${card.name.last}`}
                />
                <div className="user-details">
                  <section>
                    <div className="name">
                      <p className="title">Name:</p>
                      <p className="value">
                        {card.name.title} {card.name.first} {card.name.last}
                      </p>
                    </div>
                    <div className="email">
                      <p className="title">Email:</p>
                      <p className="value">{card.email}</p>
                    </div>
                  </section>
                  <section className="">
                    <div className="gender">
                      <p className="title">Gender</p>
                      <p className="value">{card.gender}</p>
                    </div>
                    <div className="age">
                      <p className="title">Age</p>
                      <p className="value">{card.dob.age}</p>
                    </div>
                  </section>
                  <section className="">
                    <div className="phone">
                      <p className="title">DOB</p>
                      <p className="value">{new Date(card.dob.date).toLocaleDateString()}</p>
                    </div>
                    <div className="city">
                      <p className="title">City</p>
                      <p className="value">{card.location.city}</p>
                    </div>
                  </section>
                  <section>
                    <div className="state">
                      <p className="title">State</p>
                      <p className="value">{card.location.state}</p>
                    </div>
                    <div className="country">
                      <p className="title">Country</p>
                      <p className="value">{card.location.country}</p>
                    </div>
                  </section>
                </div>
              </div>
            </main>
          ))}
    </>
  );
}
