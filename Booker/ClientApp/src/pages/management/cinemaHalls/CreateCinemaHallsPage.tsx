import { Button, Card, Checkbox, CircularProgress, Grid, TextField, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React, { useState } from "react";
import { httpGet, httpPost } from "../../../api/httpClient";
import { CinemaHall } from "../../../api/models/entities/cinemaHall";
import ChipInput from 'material-ui-chip-input'
import { useMount } from "../../../lifeCycleExtensions";
import { Cust2 } from "../../../api/models/customers/Cust2";
import { CreateCust1RequestModel } from "../../../api/requestModels/CreateCust1RequestModel";

const CreateCinemaHallsPage = () => {

    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadError, setLoadError] = useState<string>();
    const [error, setError] = useState<string>();
    const [success, setSuccess] = useState(false)

    const [name, setName] = useState("");
    const [chips, setChips] = useState<string[]>([])
    const [chipsN, setChipsN] = useState<Number[]>([])
    

    useMount(() => {
        downloadRelationData();
    })

    const downloadRelationData = async () => {
        setLoading(true);

        const result1 = await httpGet<string>("");
        const result2 = await httpGet<string>("");

        if(result1.isSuccess && result2.isSuccess) {

        } else {
            setLoadError("Loading Failed")
        }

        setLoading(false);
    }


    const submit = async () => {
        setSubmitting(true);
        setError(undefined);
        setSuccess(false);

        const result = await httpPost<CreateCust1RequestModel>("/cinemahall", {
            name: name
        } as CreateCust1RequestModel);
        
        if(result.isSuccess) {
            setName("");
            setSuccess(true);
        } else {
            setError(result.statusCode +": "+ result.message);
        }

        setSubmitting(false);
    }

    const isNumber = (n: string | number): boolean => 
        !isNaN(parseFloat(String(n))) && isFinite(Number(n));

    const renderBody = () => {
        if(loading) {
            return <div style={{width: "100%"}}><CircularProgress/></div>
        }

        return (
            <>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Checkbox onChange={e => setSuccess(e.target.checked)} value={success}/> isVip
                </div>
                <div style={{padding:"5px"}}/>
                <ChipInput label="Hejsa" variant="outlined" value={chipsN} onAdd={(chip) => {
                    if(isNumber(chip)) {
                        setChipsN([...chipsN, parseInt(chip)])
                    }
                }}
                onDelete={(chip, index) => {
                    chipsN.splice(index, 1)
                    console.log(chipsN)
                    setChipsN([...chipsN]);
                }}
                />
                <div style={{padding:"5px"}}/>
                <ChipInput variant="outlined" onChange={(chips) => setChips(chips)}/>
                <div style={{padding:"5px"}}/>
                <TextField onChange={(e) => setName(e.target.value)} value={name} type="bool" label="Name" variant="outlined"></TextField>
                <div style={{padding:"5px"}}/>
                {submitting
                ? <div style={{width: "100%"}}><CircularProgress/></div>
                : <Button onClick={submit} variant="outlined" color="primary">Create</Button>}
            </>       
        )
    }

    const render = () => {
        return <div>
            <Grid container style={{width: "100%", minHeight: "100vh"}} justify="center" alignItems="center">
                <Grid item xs={10} sm={8} md={6} lg={4} xl={4}>
                    <Card style={{width: "100%", padding: "20px", display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center"}}> 
                        <Typography style={{paddingBottom: "10px"}} variant="h5">Create CinemaHall</Typography>
                        {success
                        ? <Alert style={{margin: "10px 0"}} severity="success">
                            <AlertTitle>Success</AlertTitle>
                            CinemaHall was created successfully
                        </Alert>
                        : null}
                        {error || loadError
                        ? <Alert style={{margin: "10px 0"}} severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {error ? error : loadError}
                        </Alert>
                        : null}
                        {loadError 
                        ? null
                        : renderBody()}
                    </Card>
                </Grid>
            </Grid>
        </div>
    }

    return render();
}

export default CreateCinemaHallsPage;