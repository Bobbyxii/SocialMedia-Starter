import { useDisclosure } from '@mantine/hooks';
import './InfoCard.css'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Button from '@mui/material/Button';
import ProfileModal from '../ProfileModal/ProfileModal';

function InfoCard() {
    // use to control the modal - not usestate
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>Your Info</h4>
                <div>
                    <ModeEditIcon fontSize='small' onClick={open} />
                    <ProfileModal opened={opened} closed={close} />

                </div>

            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span> Married</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span> Alagbado</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span> Home</span>
            </div>
            <Button variant="contained" size="small">
                Logout
            </Button>
        </div>
    )
}



export default InfoCard