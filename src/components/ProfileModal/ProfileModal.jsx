import { Modal, useMantineTheme } from '@mantine/core';
import { Button } from '@mui/material'
import './ProfileModal.css'

function ProfileModal({ opened, closed }) {
    const theme = useMantineTheme();

    return (
        <>
            <Modal
                opened={opened}
                onClose={closed}
                title="Your Info"
                size='55%'
                overlayProps={{
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                    opacity: 0.55,
                    blur: 3,

                }}
            >
                <form action="" className="infoForm">
                    {/* <h3>Your info</h3> */}
                    <div>
                        <input type="text" placeholder='First Name' className='infoInput' name='FirstName' />
                        <input type="text" placeholder='Last Name' className='infoInput' name='LastName' />
                    </div>
                    <div>
                        <input type="text" placeholder='Works At' className='infoInput' name='WorksAt' />
                    </div>
                    <div>
                        <input type="text" placeholder='Lives In' className='infoInput' name='LivesIn' />
                        <input type="text" placeholder='Country' className='infoInput' name='Country' />
                    </div>
                    <div>
                        <input type="text" placeholder='Relationship Status' className='infoInput' name='RelationshipStat' />
                    </div>
                    <div>
                        Profile Picture
                        <input type="file" name='ProfileImg' />
                        Cover Picture
                        <input type="file" name='CoverImg' />
                    </div>
                    <Button variant="contained" size="small" type="submit">
                        Update
                    </Button>
                </form>
            </Modal>
        </>
    );
}

export default ProfileModal;