

export class InitialState{

    constructor(){
        this.uiState = new UIState();
    }

}


export class UIState{

    constructor(){
        this.isUserAuthenticated = false;
        this.error = new ErrorStateModel();
        this.success = new SuccessStateModel();
    }

}

export class ErrorStateModel{

    constructor(){
        this.hasError = false;
        this.errorMessage = '';
        this.errorResponse = '';
    }

}

export class SuccessStateModel{

    constructor(){
        this.isSuccess = false;
        this.successMessage = '';
        this.successResponse = '';
    }

}

