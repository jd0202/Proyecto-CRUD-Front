export class Menu{
    public crearEspecializacion: boolean = false;
    public listarEspecializacion: boolean = false;
    public editarEspecializacion: boolean = false;
    public crearPersonalMed: boolean = false;
    public listarPersonalMed: boolean = false;
    public editarPersonalMed: boolean = false;
    public crearPaciente: boolean = false;
    public listarPaciente: boolean = false;
    public editarPaciente: boolean = false;
    public crearHistoriaClinica: boolean = false;
    public listarHistoriaClinica: boolean = false;
    public editarHistoriaClinica: boolean = false;

    constructor(){
    }

    varsFalse(){
        this.crearEspecializacion = false;
        this.listarEspecializacion = false;
        this.editarEspecializacion = false;
        this.crearPersonalMed = false;
        this.listarPersonalMed = false;
        this.editarPersonalMed = false;
        this.crearPaciente = false;
        this.listarPaciente = false;
        this.editarPaciente = false;
        this.crearHistoriaClinica = false;
        this.listarHistoriaClinica = false;
        this.editarHistoriaClinica = false;
    }
}