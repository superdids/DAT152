package no.hib.dat152;

public class Main {
	public static void main(String[] args) {
		int [] iAmAnArrayThatWantsToBeSummed = new int[4999];
		for(int x = 0; x < iAmAnArrayThatWantsToBeSummed.length; ++x) 
			iAmAnArrayThatWantsToBeSummed[x] = (x+1);
		long start = System.currentTimeMillis();
		computeArr(iAmAnArrayThatWantsToBeSummed);
		long end = System.currentTimeMillis();
		System.out.println("Time array: " + (end-start));
		start = System.currentTimeMillis();
		computeRec(0,0,iAmAnArrayThatWantsToBeSummed);
		end = System.currentTimeMillis();
		System.out.println("Time recursion: " + (end-start));
		
		start = System.currentTimeMillis();
		computeDirect(iAmAnArrayThatWantsToBeSummed);
		end = System.currentTimeMillis();
		System.out.println("Time direct: " + (end-start));
		
	}
	
	private static void computeDirect(int [] arr) {
		if(arr.length % 2 == 0) System.out.println("Sum direct: " + (arr[0]+arr[arr.length-1])*(arr.length/2));
		else computeArr(arr);
	}
	
	private static void computeArr(int [] arr) {
		int sum = 0;
		for(int x = 0; x < arr.length; ++x) 
			sum += arr[x];
		System.out.println("Sum array: " + sum);
	}
	
	private static void computeRec(int x, int sum, int [] arr) {
		if(x == arr.length-1) System.out.println("Sum recursion: " + (sum+arr[x]));
		else computeRec(x+1,sum+arr[x],arr);
	}
}