export class Icon {
    constructor(
        public stylesClass: string = "text-center",
        public navigateToUrl: string, 
        public angularfontAwesomeIconName: string,
        public angularfontAwesomeIconSize: string = "lg",
        public noIconText: string = "Find us on " + angularfontAwesomeIconName   
    ) {}
}
