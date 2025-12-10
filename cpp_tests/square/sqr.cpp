#include <iostream>

using namespace std;

int square(int num){
  int sum = 0;
  for (int i = 0; i < num; i++){
    sum += num;
  }
  return sum;
}

int main(){
  cout << "Insert an integer: \n";
  int num;
  cin >> num;
  cout << "The square of " << num << " is: " << square(num) << '\n';
}
