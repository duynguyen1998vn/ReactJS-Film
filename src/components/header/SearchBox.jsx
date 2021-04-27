import React from 'react';
import { Form, FormGroup, Input} from 'reactstrap';
import {useForm} from 'react-hook-form';
import { useDispatch} from 'react-redux';
import './css/searchbox.css';


function SearchBox() {
    const {register,handleSubmit,formState:{errors}} = useForm();
    
    const dispatch = useDispatch();

    const submitForm = (data) => {
        if(data.keySearch === undefined ||data.keySearch === null || data.keySearch.trim() === '' ){
            dispatch({
                state:'',
                type:'SEARCH',
            });

            
        }else{
            dispatch({
                type:'RESET_LIST_FILM',
            });
            dispatch({
                state:data.keySearch.toLowerCase(),
                type:'SEARCH',
            });
        }
    }

    return (
        <div className="Search-box">
            <Form onSubmit={handleSubmit(submitForm)}>
                <FormGroup>
                    <Input type='text' placeholder="Search" {...register("keySearch")}/>
                    {errors.keySearch && "Wrong"}
                </FormGroup>
            </Form>
        </div>
    );
}

export default SearchBox;


