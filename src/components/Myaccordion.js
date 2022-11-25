
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {useState ,useEffect,useContext} from 'react';
import axios from "axios";
//import "../css/Myaccordion.css"
import { textAlign } from "@mui/system";
import WatchListContext from "../context/watchlistcontext";


    const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0
    },
    "&:before": {
        display: "none"
    }
    }));

    const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
    ))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)"
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1)
    }
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)"
    }));


function MyAccordion({books,setBooks}) {

    const [expanded, setExpanded] = React.useState("panel1");
    const {watchList,setWatchList}=useContext(WatchListContext);
    

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    console.log(books)

    function addtoWatchList(title){

        console.log('wathc',watchList);
        let arrayWatchList=[...watchList,title];
        setWatchList(arrayWatchList);

    }
   

    return (

      <div className="containerAllaccordions">

            {books?.map((booksitem,index)=>{
        
    
            return(


                <div>
                        <Accordion
                             expanded={expanded === `panel${index+1}`}
                             onChange={handleChange(`panel${index+1}`)}
                            >

                            <AccordionSummary aria-controls={"panel" + index+1 + "d-content"} id={"panel" + index+1 + "d-header"}>

                                <Typography>  
                                {booksitem.volumeInfo.title}
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                        
                                      <div>
                                        {booksitem.volumeInfo.title}
                                       </div>
                                       <div>
                                        {booksitem.volumeInfo.language}
                                        </div>
                                        <div>
                                            <button onClick={()=>addtoWatchList(booksitem.volumeInfo.title)}>add to WatchList</button>
                                        </div>
                                    
                                </AccordionDetails>

                     </Accordion>

                </div>

            )
            
            })}

      </div>
    );
}

export default MyAccordion;