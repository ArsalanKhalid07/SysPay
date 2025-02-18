import { useState } from "react";
import { Button, Input, Menu, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import Profile from "../../Assets/Images/profile.jpg";
import Flag from "../../Assets/Svgs/flag-us.svg"
import "./Header.scss";

const Header = () => {
    const [lang,setLang] = useState("eng");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value);
    };

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <header className="themeHeader">
        <div className="themeHeader--left">
            Dashboard
        </div>
        <div className="themeHeader--right">
            <div className="search-mobile">
                    <SearchIcon />
            </div>
            <div className="search">
                <Input
                    placeholder="Search here..."
                    startAdornment={   
                        <SearchIcon />
                    }
                    />
            </div>
            <div className="language">
                    <img src={Flag} alt="flag"/>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={lang}
                    onChange={handleChange}
                    label="Language"
                    IconComponent={ExpandMoreRoundedIcon}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none', 
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                    >
                        <MenuItem value={"eng"}>Eng (us)</MenuItem>
                        <MenuItem value={"urdu"}>Urdu</MenuItem>
                        <MenuItem value={"german"}>German</MenuItem>
                    </Select>
            </div>
            <div className="notification">
                <sup><FiberManualRecordRoundedIcon /></sup>
                <NotificationsNoneOutlinedIcon className="notificationIcon" />
            </div>
            <div className="profile">
               <img src={Profile} alt="profile" />
               <div className="profileUser">
                    <h4>Musfiq</h4>
                    <h6>Admin</h6>
               </div>
               <div className="profileMenu">
                    <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >
                     <ExpandMoreRoundedIcon />
                    </Button>
                        <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
               </div>
            </div>
        
        </div>
    </header>
  )
}

export default Header