import React, { useCallback, useEffect } from "react";
// import {Autocomplete} from "@mui/core/AutocompleteUnstyled";
// import TextField from "@mui/core/TextField";
// import CircularProgress from "@material-ui/core/CircularProgress";
import axios from 'axios'
import { getAmadeusData } from "../api/amadeus.api";
import { debounce } from "lodash"

const SearchAutocomplete = (props) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [search, setSearch] = React.useState('')
  const [keyword, setKeyword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const [searchQuery, setSearchQuery] = React.useState("")

  // Configure options format for proper displaying on the UI
  const names = options.map(i => ({ type: i.subType, name: i.name }));

  // Debounce func prevents extra unwanted keystrokes, when user triggers input events 
  const debounceLoadData = useCallback(debounce(setKeyword, 1000), []);

  useEffect(() => {
    debounceLoadData(search);
  }, [search]);

  // Same example as in *SearchRoot* component
//   React.useEffect(() => {

//     setLoading(true)
//     const { out, source } = getAmadeusData({ ...props.searchQuery, page: 0, keyword });

//     out.then(res => {
//       if (!res.data.code) {
//         console.log(res.data.data)
//         console.log(res.data.data[0].iataCode)
//         setOptions(res.data.data);
//       }
//       setLoading(false)
//     }).catch(err => {
//       axios.isCancel(err);
//       setOptions([]);
//       setLoading(false)

//     });

//     return () => {
//       source.cancel()
//     };
//   }, [keyword]);

const CancelToken = axios.CancelToken;
const source = CancelToken.source

  const handleSearchRequest = () => {
    const out = axios.get(
        `/api/airports/?keyword=${'BERLIN'}&page=${0}&subType=${'CITY,AIRPORT'}`,
        {
          cancelToken: source.token
        }
    )

        console.log(out)
    // const { out, source } = getAmadeusData({ ...props.searchQuery, page: 0, keyword });
    // out.then(res => {
    //     if (!res.data.code) {
    //       console.log(res.data.data)
    //       console.log(res.data.data[0].iataCode)
    //       setOptions(res.data.data);
    //     }
    //     setLoading(false)
    //   }).catch(err => {
    //     axios.isCancel(err);
    //     setOptions([]);
    //     setLoading(false)
  
    //   });
  }

  // Desctructuring our props
//   const { city, airport } = props.search

//   const label = city && airport ? "City and Airports" : city ? "City" : airport ? "Airports" : ""

  return (
    // This is Material-UI component that also has it's own props
    // <>
    //   <Autocomplete
    //     id="asynchronous-demo"
    //     style={{ width: 300, marginBottom: "1rem" }}
    //     open={open}
    //     onOpen={() => {
    //       setOpen(true);
    //     }}
    //     onClose={() => {
    //       setOpen(false);
    //     }}
    //     getOptionSelected={(option, value) =>
    //       option.name === value.name && option.type === value.type
    //     }
    //     onChange={(e, value) => {
    //       if (value && value.name) {
    //         props.setSearch((p) => ({ ...p, keyword: value.name, page: 0 }))
    //         setSearch(value.name)
    //         return;
    //       }
    //       setSearch("")
    //       props.setSearch((p) => ({ ...p, keyword: "a", page: 0 }))

    //     }}
    //     getOptionLabel={option => {
    //       return option.name;
    //     }}
    //     options={names}
    //     loading={loading}
    //     renderInput={params => {
    //       return (
    //         <TextField
    //           label={label}
    //           fullWidth
    //           onChange={e => {
    //             e.preventDefault();
    //             setSearch(e.target.value);
    //           }}
    //           variant="outlined"
    //           inputProps={{
    //             ...params.inputProps,
    //             value: search
    //           }}
    //           InputProps={{
    //             ...params.InputProps,
    //             endAdornment: (
    //               <React.Fragment>
    //                 {loading ? (
    //                   {/* <CircularProgress color="inherit" size={20} /> */}
                      
    //                 ) : null}
    //                 {params.InputProps.endAdornment}
    //               </React.Fragment>
    //             )
    //           }}
    //         />
    //       );
    //     }}
    //   />
    // </>

    <div>
        <input type="text"
           value={searchQuery}
           onChange={e => {
               e.preventDefault()
               setSearchQuery(e.target.value)
           }}
           />
        <button onClick={handleSearchRequest}>search</button>           
    </div>
  )
};

export default SearchAutocomplete;