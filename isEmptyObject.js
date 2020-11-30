const isEmpty = (ob) => {
        for (let key in ob) {
            return false;
        }
        return true;
    };
