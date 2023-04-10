#include <stdio.h>
#include <math.h>
int pgcd(int a,int b);
int main(){
    int result=pgcd(6,5);
    printf("%d",result);
    return 0;
}
int pgcd(int a, int b){
    if(a<b){
        a,b=b,a;
    }
    int q=floor(a/b);
    int r=a%b;
    if(r==0){
        return b;
    }
    return pgcd(b,r);
}












