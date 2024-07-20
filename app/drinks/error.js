"use client"

const error = (error) => {
    return (
        <div>{error.error.message}</div>
    )
}

export default error 