function copy_array(a_a){
    let a = [];
    for (let i = 0; i < a_a.length; i++) {
        a[i] = a_a[i];
      }
    return a;
}

var cube= {
    faceMap: [6,3,0,7,4,1,8,5,2],
    face_neighbors: [[5,1,2,3],
        [0,5,4,2],
        [0,1,4,3],
        [0,2,4,5],
        [2,1,5,3],
        [4,1,0,3]],

    //top, left, bottom, right
    sequences: [
        [0,1,2],[6,3,0],[8,7,6],[2,5,8]
    ],
    //TODO: check
    face_neighbors_idx: [
        [2,  0,  0, 0],
        [1,  1,  1, 1],
        [2,  3,  0, 1],
        [3,  3,  3, 3],
        [2,  2,  0, 2],
        [2,  1,  0, 3],

    ],
    

    faces: [[0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1],
    [2,2,2,2,2,2,2,2,2],
    [3,3,3,3,3,3,3,3,3],
    [4,4,4,4,4,4,4,4,4],
    [5,5,5,5,5,5,5,5,5]],

    idxToColor: function(n){
        switch(n){
            case 0:
                return 'Y';
                break;
            case 1:
                return 'B';
                break;
            case 2:
                return 'R';
                break;
            case 3:
                return 'G';
                break;
            case 4:
                return 'W';
                break;
            case 5:
                return 'O';
                break;
            default:
                error("unknown color")
        }
    },

    rotate90: function(face_n){
        let face = copy_array(this.faces[face_n]);
        for(let i = 0; i<9; i++){
            this.faces[face_n][i] = face[this.faceMap[i]];
        }
        
        let nb_face = this.faces[this.face_neighbors[face_n][0]];
        let idx_nb_face = this.sequences[this.face_neighbors_idx[face_n][0]];
        
        let tmp = [nb_face[idx_nb_face[0]],nb_face[idx_nb_face[1]],nb_face[idx_nb_face[2]]];

        for(let i = 0; i<4; i++){
            
            let next = (i+1)%4;


            nb_face = this.faces[this.face_neighbors[face_n][next]];
            idx_nb_face = this.sequences[this.face_neighbors_idx[face_n][next]];

            for(let j = 0; j<3; j++){
                let tmp2 = nb_face[idx_nb_face[j]];
                nb_face[idx_nb_face[j]] = tmp[j];
                tmp[j] = tmp2;
            }

        }
    },

    update_view: function(){
        tb = document.getElementById("cube_text_box");
        str = ""
        str = "<table><tr><th></th>";

        str += this.get_face_html(0);

        str += "<th></th></tr><tr>";
        
        str += this.get_face_html(1);
        str += this.get_face_html(2);
        str += this.get_face_html(3);
        
        str += "</tr><tr><th></th>";
        str += this.get_face_html(4);
        str += "<th></th></tr><tr>";
        
        str += "</tr><tr><th></th>";
        str += this.get_face_html(5);
        str += "</tr><table>"

        tb.innerHTML = str;

    },

    get_face_html: function(face_n){
        str = "<th><table>";

        for(let i = 0; i<3; i++){
            str+="<tr>"
            for(let j = 0; j<3; j++){
                str+="<th>"
                str+= this.idxToColor(this.faces[face_n][i*3+j]);
                str+="</th>"
            }
            str+="</tr>"
        }

        str+="</table></th>"
        return str;

    }

}