import { Link } from 'react-router-dom';
import './style.css'
// import { useMemo } from 'react';
// onEdit,
const List = ({ lists, confirmModal }) => {

    return (
        <div className="row">
            {lists.map((a) => {
                return (
                    <div key={a.id} className="col-4">
                        <div className="user ">
                            <div>
                                Name: {a.name}
                            </div>
                            <div>
                                Phone: {a.phone}
                            </div>
                            <div>
                                <div>
                                    {/* onClick={() => {
                                            onEdit(a)
                                        }} */}
                                    <Link to={`/users/${a.id}/edit`}>
                                        <button className='btn btn-info' >Edit</button>
                                    </Link>
                                    <button className='btn btn-danger' onClick={() => {
                                        confirmModal(a.id)
                                    }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List;