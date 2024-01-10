import React, { useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from '../../State/Auth/Action';

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {auth} = useSelector(store => store);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if(token) {
            dispatch(getUser(token))
        }
    }, [token, auth.token]);

    useEffect(() => {

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password")
        };
        dispatch(register(userData));
        console.log(userData);
    }

    return (
        <div>
            <form action={handleSubmit} >
                <Grid container spacing={3} >
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            autoComplete="given-name"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12} >
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12} >
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="password"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            className="bg-[#9155FD] w-full"
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ padding: "8rem 0", bgColor: "#9155FD" }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className="flex justify-center flex-col items-center">
                <div className="py-3 flex items-center">
                    <p>Already account? Login</p>
                    <Button
                        onClick={() => navigate("/login")}
                        className="ml-5"
                        size="small"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm