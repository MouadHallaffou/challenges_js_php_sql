<?php 

interface Registerable {
    public function register(string $participant): bool;
    public function getParticipantsCount(): int;
    public function isFull(): bool;
}

abstract class AbstractSurfActivity implements Registerable {
    protected string $id;
    protected string $name;
    protected string $instructor;
    protected int $maxParticipants;
    protected array $participants;
    protected array $equipmentNeeded;

    public function __construct(
        string $id,
        string $name,
        string $instructor,
        int $maxParticipants,
        array $equipmentNeeded = []
    ) {
        $this->id = $id;
        $this->name = $name;
        $this->instructor = $instructor;
        $this->maxParticipants = $maxParticipants;
        $this->participants = [];
        $this->equipmentNeeded = $equipmentNeeded;
    }

    // Getters
    public function getId(): string {
        return $this->id;
    }

    public function getName(): string {
        return $this->name;
    }

    public function getInstructor(): string {
        return $this->instructor;
    }

    public function getMaxParticipants(): int {
        return $this->maxParticipants;
    }

    public function getParticipants(): array {
        return $this->participants;
    }

    public function getEquipmentNeeded(): array {
        return $this->equipmentNeeded;
    }

    // Setters avec validation
    public function setId(string $id): void {
        if (empty($id)) {
            throw new InvalidArgumentException("ID cannot be empty");
        }
        $this->id = $id;
    }

    public function setName(string $name): void {
        if (empty($name)) {
            throw new InvalidArgumentException("Name cannot be empty");
        }
        $this->name = $name;
    }

    public function setInstructor(string $instructor): void {
        if (empty($instructor)) {
            throw new InvalidArgumentException("Instructor cannot be empty");
        }
        $this->instructor = $instructor;
    }

    public function setMaxParticipants(int $maxParticipants): void {
        if ($maxParticipants <= 0) {
            throw new InvalidArgumentException("Max participants must be positive");
        }
        $this->maxParticipants = $maxParticipants;
    }

    public function setEquipmentNeeded(array $equipmentNeeded): void {
        $this->equipmentNeeded = $equipmentNeeded;
    }

    // Méthodes de l'interface Registerable
    public function register(string $participant): bool {
        if ($this->isFull()) {
            return false;
        }
        
        $this->participants[] = $participant;
        return true;
    }

    public function getParticipantsCount(): int {
        return count($this->participants);
    }

    public function isFull(): bool {
        return $this->getParticipantsCount() >= $this->maxParticipants;
    }

    // Méthodes abstraites
    abstract public function calculatePrice(): float;
    abstract public function getActivityDetails(): string;
}

class SurfLesson extends AbstractSurfActivity {
    private const BASE_PRICE = 50;
    private const ADVANCED_SURCHARGE = 0.2;
    
    private string $skillLevel; // 'beginner', 'intermediate', 'advanced'

    public function __construct(
        string $id,
        string $name,
        string $instructor,
        int $maxParticipants,
        string $skillLevel,
        array $equipmentNeeded = []
    ) {
        parent::__construct($id, $name, $instructor, $maxParticipants, $equipmentNeeded);
        $this->setSkillLevel($skillLevel);
    }

    public function setSkillLevel(string $skillLevel): void {
        $validLevels = ['beginner', 'intermediate', 'advanced'];
        if (!in_array($skillLevel, $validLevels)) {
            throw new InvalidArgumentException("Invalid skill level");
        }
        $this->skillLevel = $skillLevel;
    }

    public function getSkillLevel(): string {
        return $this->skillLevel;
    }

    public function calculatePrice(): float {
        $price = self::BASE_PRICE;
        if ($this->skillLevel === 'advanced') {
            $price += $price * self::ADVANCED_SURCHARGE;
        }
        return $price;
    }

    public function getActivityDetails(): string {
        return sprintf(
            "[LEÇON] %s - Niveau: %s - Moniteur: %s - %d/%d participants - %.2f€",
            $this->name,
            ucfirst($this->skillLevel),
            $this->instructor,
            $this->getParticipantsCount(),
            $this->maxParticipants,
            $this->calculatePrice()
        );
    }
}

class EquipmentRental extends AbstractSurfActivity {
    private const PRICES = [
        'shortboard' => 30,
        'longboard' => 35,
        'wetsuit' => 15,
        'combo' => 40
    ];
    
    private string $equipmentType;
    private int $durationHours;

    public function __construct(
        string $id,
        string $name,
        string $instructor,
        int $maxParticipants,
        string $equipmentType,
        int $durationHours = 1,
        array $equipmentNeeded = []
    ) {
        parent::__construct($id, $name, $instructor, $maxParticipants, $equipmentNeeded);
        $this->setEquipmentType($equipmentType);
        $this->setDurationHours($durationHours);
    }

    public function setEquipmentType(string $equipmentType): void {
        if (!array_key_exists($equipmentType, self::PRICES)) {
            throw new InvalidArgumentException("Invalid equipment type");
        }
        $this->equipmentType = $equipmentType;
    }

    public function setDurationHours(int $durationHours): void {
        if ($durationHours <= 0) {
            throw new InvalidArgumentException("Duration must be positive");
        }
        $this->durationHours = $durationHours;
    }

    public function calculatePrice(): float {
        return self::PRICES[$this->equipmentType] * $this->durationHours;
    }

    public function getActivityDetails(): string {
        return sprintf(
            "[LOCATION] %s - Moniteur: %s - Équipement: %s - %.2f€",
            $this->name,
            $this->instructor,
            ucfirst($this->equipmentType),
            $this->calculatePrice()
        );
    }
}

class SurfCompetition extends AbstractSurfActivity {
    private const REGISTRATION_FEE = 100;
    private const EARLY_BIRD_DISCOUNT = 0.15;
    
    private float $prizePool;
    private bool $isEarlyBird;

    public function __construct(
        string $id,
        string $name,
        string $instructor,
        int $maxParticipants,
        float $prizePool,
        bool $isEarlyBird = false,
        array $equipmentNeeded = []
    ) {
        parent::__construct($id, $name, $instructor, $maxParticipants, $equipmentNeeded);
        $this->setPrizePool($prizePool);
        $this->isEarlyBird = $isEarlyBird;
    }

    public function setPrizePool(float $prizePool): void {
        if ($prizePool < 0) {
            throw new InvalidArgumentException("Prize pool cannot be negative");
        }
        $this->prizePool = $prizePool;
    }

    public function calculatePrice(): float {
        $price = self::REGISTRATION_FEE;
        if ($this->isEarlyBird) {
            $price -= $price * self::EARLY_BIRD_DISCOUNT;
        }
        return $price;
    }

    public function getActivityDetails(): string {
        return sprintf(
            "[COMPÉTITION] %s - Moniteur: %s - %d/%d participants - Prix: %.2f€ - Prize Pool: %.2f€",
            $this->name,
            $this->instructor,
            $this->getParticipantsCount(),
            $this->maxParticipants,
            $this->calculatePrice(),
            $this->prizePool
        );
    }
}