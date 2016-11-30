<!Doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Project php</title>
	
</head>
<body>

		
		<h1>Appointments for the day</h1>

		<ul>
				<li>
					<strong>Name: </strong> <?= $appointment['title']; ?>
				</li>
				<li>
					<strong>Due date: </strong> <?= $appointment['due']; ?>
				</li>
				<li>
					<strong>Personal responsible: </strong> <?= $appointment['assigned_to']; ?>
				</li>
				<li>
					<strong>Status: </strong>

					<?php if ($appointment ['completed']) : ?>
						 <span class="icon">&#9989;</span>
					
					<?php else: ?>
						 <span class="icon">Incomplete</span>

					<?php endif; ?>
				</li>
				<li>
					<strong>Hora: </strong>

					<?php if ($appointment ['morning']) : ?>
						 <span class="icon">&#9989;</span>

					<?php else: ?>
						 <span class="icon">It's night.</span>

					<?php endif; ?>
				</li>


		</ul>
</body>
</html>