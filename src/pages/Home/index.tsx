import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Header } from '../../components/Header';
import {
    Container,
    Content,
    FilterForm,
    TableContent
} from './styles';
import { UserData } from '../../types';
import { ModalInfo } from '../../components/ModalInfo';

export function Home(){
    const [dataFetching, setDataFetching] = useState<UserData[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
    const [dataUser, setdataUser] = useState<UserData>();
    const [searchCountry, setSearchCountry] = useState('');


    function handleOpenModalInfo(userSelected: UserData){
        setdataUser(userSelected);
        setIsModalInfoOpen(true);
    }

    function handleCloseModalInfo() {
        setIsModalInfoOpen(false);
    }

    useEffect(() => {
        axios.get('https://randomuser.me/api/', {
            params: {
                results: 10
            }
        })
        .then(response => {
            setDataFetching(response.data.results);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setIsFetching(false);
        })
    },[]);

    const filteredCountry = searchCountry.length > 0
        ? dataFetching.filter(a => a.location.country.toUpperCase().includes(searchCountry.toUpperCase()))
        : [];

    const filteredName = search.length > 0 
        ? dataFetching.filter(a => (a.name.first.toUpperCase() || a.name.last.toUpperCase()).includes(search.toUpperCase()))
        : [];

    const actuallyFilter = search.length > 0 ? filteredName : filteredCountry;

    return (
        <Container>
            <Header />
            <Content>
                <h1>List of Developers</h1>
                {
                    isFetching ? (
                        <ReactLoading type="spin" color="#FFF" /> 
                    ):(
                        <>
                            <FilterForm>
                                <div>
                                    <label htmlFor="name">Search</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        placeholder="student's name"
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nationality">Nationality</label>
                                    <select 
                                        name="nationality" 
                                        id="nationality"
                                        onChange={(e) => setSearchCountry(e.target.value)}
                                        value={searchCountry}
                                    >
                                        <option value="">All</option>
                                        {
                                            dataFetching.map((e, index) => {
                                                return (
                                                    <option key={index} value={e.location.country}>{e.location.country}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </FilterForm>
                            <TableContent>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Sex</th>
                                        <th>Nationality</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        searchCountry.length > 0 || search.length > 0 ? (
                                            actuallyFilter.map((e, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{`${e.name.first} ${e.name.last}`}</td>
                                                        <td>{e.gender}</td>
                                                        <td>{e.location.country}</td>
                                                        <td>
                                                            <button onClick={() => handleOpenModalInfo(e)}>Visualizar</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            dataFetching.map((e, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{`${e.name.first} ${e.name.last}`}</td>
                                                        <td>{e.gender}</td>
                                                        <td>{e.location.country}</td>
                                                        <td>
                                                            <button onClick={() => handleOpenModalInfo(e)}>Visualizar</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        )
                                    }
                                </tbody>
                            </TableContent>
                        </>
                    )
                }
            </Content>
            <ModalInfo 
                isOpen={isModalInfoOpen}
                onRequestClose={handleCloseModalInfo}
                userSelected={dataUser}
            />
        </Container>
    )
}