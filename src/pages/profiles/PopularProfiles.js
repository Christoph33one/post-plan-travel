import React, { useEffect, useState } from 'react'
import appStyles from '../../App.module.css';
import { Container } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../../components/Asset';

const PopularProfiles = () => {

    const [profileData, setProfileData] = useState({
        // we will use the pageProfile later!
        pageprofile: { results: [] },
        PopularProfiles: { results: [] },
    });

    const { PopularProfiles } = profileData; 
    const currentUser = useCurrentUser(); 

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(
                    '/profiles/?.ordering=-followers_count'
                );
                setProfileData(prevState => ({
                    ...prevState,
                    PopularProfiles: data,
                }));
            } catch (err) {
                console.log(err)
            }
        };

        handleMount()
    }, [currentUser]);

  return (
    <Container className={appStyles.Content}>
        {PopularProfiles.results.length ? (
        <>
            <p>Most followed profiles.</p>
            {PopularProfiles.results.map(profile => (
            <p key={profile.id}>{profile.owner}</p>
        ))}
        </>
        ) : (
            <Asset spinner/>
        )}
    </Container>
  )
}  

export default PopularProfiles