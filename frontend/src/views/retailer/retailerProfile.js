import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import '../customer/customerProfile.css';
import { Button } from '../../components/Button';
import TextField from '@mui/material/TextField';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#fff',
  },
  '& .MuiInputBase-root': {
    color: '#A4A9AF',
  },
  '& label': {
    color: '#fff',
  },
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#B0B9C2',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});

export default function RetailerProfile() {
  const { user, updateUser } = useContext(AuthContext);
  const [label, setLabel] = React.useState(''); // eslint-disable-line
  const [firstName, setFirstName] = React.useState(user.first_name);
  const [lastName, setLastName] = React.useState(user.last_name);
  const [email, setEmail] = React.useState(user.email);
  const [isProfileUpdated, setIsProfileUpdated] = React.useState(false);

  console.log(user);

  return (
    <div>
      <div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography className="product_name">Profile</Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            margin: 'auto',
            height: '100%',
            width: '90vw',
            flexGrow: 1,
            backgroundColor: 'transparent',
            color: 'white',
          }}
        >
          <Box className="profile">
            <Grid item xs>
              <Box sx={{ margin: 2 }}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  sx={{ fontSize: '1.3rem', color: 'rgb(200, 200, 200)' }}
                >
                  <span>First Name</span>
                </Typography>
                <div className="text-field">
                  <StyledTextField
                    fullWidth
                    size="small"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setIsProfileUpdated(true);
                    }}
                    label={label === '' ? ' ' : ' '}
                    InputLabelProps={{ shrink: false }}
                    textColor="#A4A9AF"
                    variant="outlined"
                    defaultValue={user.first_name}
                    sx={{ color: 'white' }}
                  />
                </div>
              </Box>
              <Box sx={{ margin: 2 }}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  sx={{ fontSize: '1.3rem', color: 'rgb(200, 200, 200)' }}
                >
                  <span>Last Name</span>
                </Typography>
                <div className="text-field">
                  <StyledTextField
                    fullWidth
                    size="small"
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setIsProfileUpdated(true);
                    }}
                    label={label === '' ? ' ' : ' '}
                    InputLabelProps={{ shrink: false }}
                    textColor="#A4A9AF"
                    variant="outlined"
                    defaultValue={user.last_name}
                    sx={{ color: 'white' }}
                  />
                </div>
              </Box>
              <Box sx={{ margin: 2 }}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  sx={{ fontSize: '1.3rem', color: 'rgb(200, 200, 200)' }}
                >
                  <span>Email</span>
                </Typography>
                <div className="text-field">
                  <StyledTextField
                    fullWidth
                    size="small"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsProfileUpdated(true);
                    }}
                    label={label === '' ? ' ' : ' '}
                    InputLabelProps={{ shrink: false }}
                    textColor="#A4A9AF"
                    variant="outlined"
                    defaultValue={user.email}
                    sx={{ color: 'white' }}
                  />
                </div>
              </Box>
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 3,
            }}
          >
            <Button
              buttonStyle={isProfileUpdated ? 'btn--primary' : 'btn--disabled'}
              onClick={() => {
                updateUser(firstName, lastName, email, user.user_id);
              }}
            >
              Update Profile
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}
