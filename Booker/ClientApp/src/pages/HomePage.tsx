import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { httpGet } from "../api/httpClient";
import { useMount } from "../lifeCycleExtensions";

const HomePage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState<string[]>([])
    const [error, setError] = useState<string>();

    // Fetch users on homePage mount
    useMount(() => {
        fetchUsers()
    })

    const fetchUsers = async () => {
        setIsLoading(true);
        setError(undefined);

        const result = await httpGet<string[]>("/users")
        if(result.isSuccess) {
            setUsers(result.data)
        } else {
            setError("Error happend!")
        }

        setIsLoading(false);
    }

    const render = () => {
        return <div>
            {isLoading 
            ? (
                <CircularProgress></CircularProgress>
            ) : (
                users.map(e => {
                    return <div>{e}</div>
                })
            )}
        </div>
    }

    return render();
}

export default HomePage;