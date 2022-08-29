import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createUser} from '../../apis/users';
import FormUser from '../../components/FormUser';

const DEFAULT_Item = { name: "", phone: "" };

// const validate = (lists, item) => {

//     if (item.name === '' || item.phone === '') {
//         return false
//     }
//     const newItem = lists.find((items) => {
//         return items.name === item.name || items.phone === item.phone
//     })
//     return (newItem ? false : true)
// }

const UserCreate = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState(DEFAULT_Item);

    // const onChange = (e) => {

    // }
    // const onSubmit = (e) => {

    // }
    const onChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;

        setItem({
            ...item,
            [name]: value
        });
    };
    const onSubmit = () => {

        // const isValidate = validate(lists, item)
        // if (isValidate) {
        //     //Create
            if (!item.id) {
                createUser(item).then((response) => {
                    // setItem(DEFAULT_Item)
                    navigate('/users');//dung de quay ve trang users
                }).catch((error) => {
                    console.log(error)
                })
            }
            // }

            // const element = document.querySelector('#exampleModal')
            // const modal = window.bootstrap.Modal.getOrCreateInstance(element)
            // modal.hide()
        // };
    }
        return (
            <div>
                Create uers

                <FormUser item={item} onChange={onChange} onSubmit={onSubmit}
                />
            </div>
        )
    }

    export default UserCreate;