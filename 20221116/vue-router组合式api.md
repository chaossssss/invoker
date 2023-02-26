watch(
    () => reoute.params.id,
    async newId => {
        userData.value = await fetchUser(newId)
    }
)