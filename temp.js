form.addEventListener('dblclick', {
    handleEvent(event) {
        console.log("currentTarget", event.currentTarget);
        console.log("target", event.target);
        console.log("-------------------");
    }
});