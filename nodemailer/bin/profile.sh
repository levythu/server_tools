echo "Here are the profile data about server:"

echo ""
echo "----====Memory info====----"
free

echo ""
echo "----====Disk info====----"
df

echo ""
echo "----====Process info====----"
ps aux -h

echo ""
echo "----====Port info====----"
lsof -i

echo ""
echo "----====Login SUCC info====----"
cat /var/log/auth.log | grep Accpet

echo ""
echo "----====Login FAIL info====----"
cat /var/log/auth.log | grep fail
