import Map "mo:map/Map";
import JSON "mo:json/JSON";

import Float "mo:base/Float";
import Text   "mo:base/Text";


actor Counter {
    var counter : Float = 0;

    public shared func add(x : Float) : async Float {
        counter += x;
        counter;
    };

    public shared func sub(x : Float) : async Float {
        counter -= x;
        counter;
    };

    public shared func mul(x : Float) : async Float {
        counter *= x;
        counter;
    };
    
    public shared func div(x : Float) : async Float {
        if(x != 0) {
            counter /= x;
            return (counter);    
        } else {
            return (0);
        }
    };

    public shared func reset() : async Float {
        counter := 0;
        counter;
    };

    public shared query func see() : async Float {
        counter;
    };

    public shared func power(x : Float) : async Float {
        counter **= x;
        counter;
    };

    public shared func sqrt() : async Float {
        counter := Float.sqrt(counter);
        counter;
    };

    public shared func floor() : async Float {
        counter := Float.floor(counter);
        counter;
    };
   
};

//try using assert for checking or capturing 0 dividends