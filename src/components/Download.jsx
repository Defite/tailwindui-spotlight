import React from "react";
import {Button} from "@/components/Button";
import * as PropTypes from "prop-types";


const DownloadFile = () => {

    const onButtonClick = (response) => {
        console.log(response)
        fetch('Curriculum-Vitaee.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Curriculum-Vitaee.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <Button onClick={onButtonClick} download variant="secondary" className="group mt-6 w-full">
                    Download CV
                    </Button>
            </center>
        </>
    );
};

export default DownloadFile;
