import React from 'react';

import Helmet from '../components/Helmet/Helmet';

import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import NewsList from '../components/UI/NewsList';
import news from '../assets/data/news';


const Home = () => {

    const results = news[0].response.results;

    const [newsData, setNewsData] = React.useState(results);
    const [page, setPage] = React.useState('');

    const handleChangePage = (event) => {
        setPage(event.target.value);
    };

    const handleChangeSort = (e) => {
        const filterValue = e.target.value;
      
        if (filterValue === 'newest') {
          const sortedNews = [...newsData].sort((a, b) =>
            new Date(b.webPublicationDate) - new Date(a.webPublicationDate)
          );
          setNewsData(sortedNews);
        }
      
        if (filterValue === 'oldest') {
          const sortedNews = [...newsData].sort((a, b) =>
            new Date(a.webPublicationDate) - new Date(b.webPublicationDate)
          );
          setNewsData(sortedNews);
        }
      };
      

    const handleSearch = e => {
        const searchTerm = e.target.value

        const searchedSymptom = newsData.filter(
            item => item.sectionName?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const searchedNews = newsData.filter(
            item => item.webTitle?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setNewsData(searchedSymptom);
        setNewsData(searchedNews);
    }


    return <Helmet title={"Home"}>


        <section className='main'>
            <Container fixed>

                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop: '30px'}}>
                    <Grid xs={6}>
                        <FormControl sx={{ m: 1, width: '90%' }} variant="outlined" size="small">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                                type='text'
                                onChange={handleSearch}
                            />
                        </FormControl>
                    </Grid>

                    <Grid xs={3}>
                        <FormControl sx={{ m: 1, width: '90%' }} size="small">
                            <Select
                                onChange={handleChangeSort}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>Sort by</em>
                                </MenuItem>
                                <MenuItem value="newest">Newest</MenuItem>
                                <MenuItem value="oldest">Oldest</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid xs={3}>
                        <FormControl sx={{ m: 1, width: '90%' }} size="small">
                            <Select
                                value={page}
                                onChange={handleChangePage}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>Items on page</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>

        </section>

        <section className='pt-0'>
            <Container>
                <Grid container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    
                }} >
                    {newsData.length === 0 ? (
                        <h1 className='text-center fs-4'>No products are found!</h1>
                    ) : (
                        <NewsList data={newsData} />
                    )}
                </Grid>
            </Container>
        </section>
    </Helmet>

}

export default Home;