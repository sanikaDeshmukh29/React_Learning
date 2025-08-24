// import { Children } from "react";

function Profile() {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name="sanika"
                age="22"
                greetings={
                    <div>
                        <strong>Hi Sanika, Have a Great Day!</strong>
                    </div>
                }
            >
            <p>Hobbies : Watching TV, Java Learning</p>
             <button>Contact</button>
            </ProfileCard>
        </div>
    )
}
export default Profile;

function ProfileCard(props) {
     const { name, age, greetings,children} = props;
  
    return (
        <>
            <h2>name: {name}</h2>
            <p>age : {age}</p>
            <p>{greetings}</p>
            <div>{children}</div>
        </>
    )
}