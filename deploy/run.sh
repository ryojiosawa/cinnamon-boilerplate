#!/bin/bash
echo "Start Cinnamon Test Suite..."
java -jar lib/ccli-0.0.1.jar $USERNAME $PASSWORD -update_timeout $MAX_UPDATE_TIMEOUT -max_loop_limit $MAX_LOOP_LIMIT