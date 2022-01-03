export class Menu{
    public crearEspecializacion: boolean = false;
    public listarEspecializacion: boolean = false;
    public crearPersonalMed: boolean = false;
    public listarPersonalMed: boolean = false;
    public crearPaciente: boolean = false;
    public listarPaciente: boolean = false;
    public crearHistoriaClinica: boolean = false;
    public listarHistoriaClinica: boolean = false;

    constructor(){
    }

    varsFalse(){
        this.crearEspecializacion = false;
        this.listarEspecializacion = false;
        this.crearPersonalMed = false;
        this.listarPersonalMed = false;
        this.crearPaciente = false;
        this.listarPaciente = false;
        this.crearHistoriaClinica = false;
        this.listarHistoriaClinica = false;
    }
}