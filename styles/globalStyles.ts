import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export  const globalStyles = StyleSheet.create({
    Background:{
        flex:1,
        backgroundColor: '#D8DCDC',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    contenedorP:{
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        
    },
    LogoPrin:{
        justifyContent:'center',
        width:200,
        height: 240,
        resizeMode: "contain" 
    },
    Inputs:{
        padding:20,
        margin:15,
        height:60,
        width :300,
        borderColor:'black',
        borderWidth: 1,
        borderRadius:10,
    },
    BotonesG:{
        backgroundColor:'red'

    },
    btonlogin:{
        marginTop:20,
        justifyContent:'center',
        textAlign:'center',
        height:50,
        width: 300,
        backgroundColor: Colors.text1,
        borderRadius:10,
        padding:10,
        alignItems:'center',

    },
    btonregistrar:{
        justifyContent:'center',
        textAlign:'center',
        height:50,
        width: 300,
        backgroundColor: Colors.text1,
        borderRadius:10,
        padding:10,
        alignItems:'center',

    },

    //Menu

    logo2:{
        justifyContent:'center',
        width:100,
        height: 160,
        resizeMode: "contain", 
        marginLeft:20,
    },
    textTitle:{
        fontSize: 40, 
        fontWeight: 'bold' , 
        color: Colors.text1,
        alignItems:'center',
        paddingRight: 20,
    },
     gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 30,
        padding: 20,
    },
    headContainer:{
       flexDirection: 'row',
       alignItems: 'center',
       padding: 20,
       gap: 20,
    },
    container: {
        borderRadius: 20,
        overflow: 'hidden', //super importante para el borderRadius
        height: 150,
        width: 150,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
    },
    overlay: {
    // Esto crea una capa semitransparente sobre la imagen de fondo
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',    
  },
  TituloMenu:{
    color: 'white', 
    fontSize: 20 , 
    fontWeight: "bold"
  },
// menu intermedio
    logomenuInter:{
        justifyContent:'center',
        width:100,
        height:150,
        resizeMode: "contain", 
        marginLeft:20,
    },
    Botones: {
        borderRadius: 50,
        overflow: 'hidden', //super importante para el borderRadius
        height: 150,
        width: 300,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20
      
    },
    Backgroundperfil:{
        flex:1,
        backgroundColor: '#2e8080ff',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
        width:'100%',
        
    },

    //perfil
    btonPerfil:{
        marginTop:20,
        justifyContent:'center',
        textAlign:'center',
        height:50,
        width: 300,
        backgroundColor: Colors.text1,
        borderRadius:10,
        padding:10,
        alignItems:'center',

    },

    //vio
    container2: {
        borderRadius: 20,
        overflow: 'hidden', //super importante para el borderRadius
        height: 150,
        width: 250,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
      
    },

    //MAPA
    contenedorMapa:{
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8DCDC',
    },
    map:{
        width:'100%',
        height:'100%',
    }
});